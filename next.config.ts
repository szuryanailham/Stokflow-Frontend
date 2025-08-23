// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // The incoming request path pattern
        destination: "/dashboard", // The path you want to redirect to
        permanent: true, // Set to true for a permanent 308 redirect, false for temporary 307
      },
    ];
  },
};

module.exports = nextConfig;
