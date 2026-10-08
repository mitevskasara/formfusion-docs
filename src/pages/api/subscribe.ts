import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

const getClientIp = (req: NextApiRequest): string => {
    const forwarded = req.headers['x-forwarded-for'];
    const first = Array.isArray(forwarded) ? forwarded[0] : forwarded;
    return (
        first?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
    );
};

const isRateLimited = (req: NextApiRequest): boolean => {
    const ip = getClientIp(req);
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 10000) {
        hits.forEach((timestamps, key) => {
            if (timestamps.every((t) => now - t >= RATE_WINDOW_MS)) {
                hits.delete(key);
            }
        });
    }
    return recent.length > RATE_LIMIT;
};

const isSameOrigin = (req: NextApiRequest): boolean => {
    const host = req.headers.host;
    const source = req.headers.origin ?? req.headers.referer;
    if (!host || !source) {
        return false;
    }
    try {
        return new URL(source).host === host;
    } catch {
        return false;
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ message: 'Method not allowed' });
    }

    if (isRateLimited(req)) {
        return res
            .status(429)
            .json({ message: 'Too many requests. Please try again later.' });
    }

    if (!isSameOrigin(req)) {
        return res
            .status(403)
            .json({ message: 'Cross-origin request blocked' });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
        return res
            .status(500)
            .json({ message: 'Newsletter is not configured' });
    }

    const email = req.body?.email;
    if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    try {
        await axios.post(
            MAILERLITE_API_URL,
            { email },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );
        return res.status(200).json({ message: 'Subscribed' });
    } catch (error) {
        return res
            .status(502)
            .json({ message: 'Subscription failed. Please try again.' });
    }
};

export default handler;
