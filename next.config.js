/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['./public/assets/img/applelogo.png']
  },
  swcMinify: true,
}

module.exports = nextConfig
