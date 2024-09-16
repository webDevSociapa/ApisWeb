/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [ '@svgr/webpack' ],
          as: '*.js',
        },
      },
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
      resolveAlias: {
        underscore: 'lodash',
        mocha: { browser: 'mocha/browser-entry.js' },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
  images: {
    remotePatterns: [ {
      protocol: "https",
      hostname: "**"
    } ],
  },
  // i18n: {
  //   locales: [ 'en', 'de', 'es', 'it', 'fr' ],
  //   defaultLocale: 'en',
  // },
};

// hostname: "api-minio.projects.mindinventory.net",

export default withNextIntl(nextConfig);
