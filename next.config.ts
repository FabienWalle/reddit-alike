import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@nextui-org/react"],
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
