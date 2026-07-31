import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ru.ac.bd",
      },
    ],
  },
};

export default nextConfig;
