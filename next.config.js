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
                source: '/react-form-manager',
                destination: '/formfusion',
                permanent: true
            },
            {
                source: '/docs',
                destination: '/formfusion',
                permanent: false
            },
            {
                source: '/privacy',
                destination: '/formfusion',
                permanent: false
            },
            {
                source: '/formfusion/api',
                destination: '/formfusion/api/form',
                permanent: true
            },
            {
                source: '/formfusion/integrations',
                destination: '/formfusion/integrations/mui',
                permanent: true
            },
            {
                source: '/formfusion/api/types',
                destination: '/formfusion/api/validation',
                permanent: true
            }
        ];
    }
};

module.exports = withBundleAnalyzer(nextConfig);
