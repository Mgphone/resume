/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
// };

// export default nextConfig;
// next.config.js

// const nextConfig = {
//   // Other configurations...
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       "/@": { page: "/" },
//     };
//   },

//   reactStrictMode: true,
// };

// module.exports = nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
