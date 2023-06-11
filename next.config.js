const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure pageExtensions to include md and mdx
  experimental: {
    mdxRs: true
  }
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
