import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static HTML export
  images: {
    unoptimized: true,
  },
  // Doing this as the project is currently the user site on github
  // You can have many project sites, but only one user site.
  // The user site repo (username.github.io) is the one that occupies https://username.github.io/.
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
  trailingSlash: true,
};

export default nextConfig;
