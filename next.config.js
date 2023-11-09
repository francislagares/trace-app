/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'referrer-policy', value: 'no-referrer' }],
      },
    ];
  },
};

module.exports = nextConfig;
