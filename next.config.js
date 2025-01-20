/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images: {
        domains: [
            'blogger.googleusercontent.com',
            'https://badge.fury.io',
            'img.shields.io'
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*).webp',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400'
                    }
                ]
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    }
                ]
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.mouseflow.com https://www.googletagmanager.com; script-src-elem 'self' 'unsafe-inline' https://cdn.mouseflow.com https://www.googletagmanager.com; style-src 'self' 'unsafe-hashes' 'unsafe-inline'; img-src 'self' https://blogger.googleusercontent.com https://img.shields.io; connect-src 'self' https://cdn.mouseflow.com https://*.mouseflow.com https://vitals.vercel-insights.com https://www.google-analytics.com; frame-src 'self' https://stackblitz.com;"
                    }
                ]
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    }
                ]
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    }
                ]
            }
        ];
    },
    async redirects() {
        return [
            {
                source: '/privacy',
                destination: '/docs',
                permanent: false
            },
            {
                source: '/docs/api',
                destination: '/docs/api/form',
                permanent: true
            },
            {
                source: '/docs/integrations',
                destination: '/docs/integrations/mui',
                permanent: true
            },
            {
                source: '/docs/api/types',
                destination: '/docs/api/validation',
                permanent: true
            }
        ];
    }
};

module.exports = withBundleAnalyzer(nextConfig);
