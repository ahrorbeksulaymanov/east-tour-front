/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uzbekistan.travel',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'http',
        hostname: '86.106.181.30',
        port: '8888',
        pathname: '/api/file/**',
      },
      {
        protocol: 'http',
        hostname: '178.157.91.194',
        pathname: '/api/file/**',
      },
    ],
    unoptimized: true
  },
  // output: "export"
}

module.exports = nextConfig
