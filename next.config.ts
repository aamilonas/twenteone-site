import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/twenteone-site",
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
