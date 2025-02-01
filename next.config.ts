import type { NextConfig } from "next";

const nextConfig: NextConfig = {


    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',
          port: '',
          pathname: '/**',
        },
      ],
      domains: ["example.com", "another-domain.com", "third-domain.com"],
    },
};

export default nextConfig;
