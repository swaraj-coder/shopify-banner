/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  serverBuildTarget: "netlify", // ✅ Tell Remix to build for Netlify
  serverModuleFormat: "cjs",    // Netlify works with CJS
  dev: { port: process.env.HMR_SERVER_PORT || 8002 },
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_lazyRouteDiscovery: true,
    v3_singleFetch: false,
    v3_routeConfig: true,
  },
};
