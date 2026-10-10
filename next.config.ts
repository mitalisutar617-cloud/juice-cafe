import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/juice-cafe",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
