/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: true,
  },
  output: 'export',
}

module.exports = nextConfig
