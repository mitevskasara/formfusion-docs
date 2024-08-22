/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images: { domains: ['blogger.googleusercontent.com'] },
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
