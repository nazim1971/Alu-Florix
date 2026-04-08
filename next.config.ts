import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
    optimizeCss: true,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
