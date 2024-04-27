/** @type {import('next').NextConfig} */

import NextFederationPlugin from "@module-federation/nextjs-mf";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.output.publicPath = isProduction ?  'https://mf1-tawny.vercel.app/_next/' : 'http://localhost:3005/_next/';
    config.plugins.push(
      new NextFederationPlugin({
        name: "products",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
           './Products': "./src/pages/index.tsx",
        },
        remotes: {
          cart: isProduction ?  'https://mf-cart.vercel.app/remoteEntry.js' : `cart@http://localhost:3009/remoteEntry.js`,
        },
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