// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   allowedDevOrigins: [
//     'http://localhost:3000',
//     'http://192.168.1.4:3000',
//   ],
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.1.4:3000', // your LAN IP
  ],
}

module.exports = nextConfig

