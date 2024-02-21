/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
// };

// export default nextConfig;
// next.config.js

const nextConfig = {
  // Other configurations...
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/@": { page: "/" },
    };
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
