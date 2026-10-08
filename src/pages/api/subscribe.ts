import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ message: 'Method not allowed' });
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
