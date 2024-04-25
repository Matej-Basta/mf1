/** @type {import('next').NextConfig} */

import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.output.publicPath = 'https://mf1-tawny.vercel.app/_next'; //http://localhost:3005/_next/ 
    config.plugins.push(
      new NextFederationPlugin({
        name: "Mf1",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
           './PAGES': "./src/components/Hello.tsx",
        },
        remotes: {},
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;