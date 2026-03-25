import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static Export for Hostinger */
  output: 'export',

  /* Disable features not supported in static export */
  images: {
    unoptimized: true, // Required for static export
  },

  /* React Compiler */
  reactCompiler: true,

  /* Compression */
  compress: true,

  /* Trailing Slash */
  trailingSlash: false,

  /* Power by header */
  poweredByHeader: false,

  /* Generate ETags for better caching */
  generateEtags: true,
};

export default nextConfig;
