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
                source: '/blog',
                destination: '/react-form-manager',
                permanent: false
            },
            {
                source: '/docs',
                destination: '/react-form-manager',
                permanent: false
            },
            {
                source: '/privacy',
                destination: '/react-form-manager',
                permanent: false
            }
        ];
    }
};

module.exports = withBundleAnalyzer(nextConfig);
