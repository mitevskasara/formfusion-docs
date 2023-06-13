/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
}

module.exports = nextConfig
