/* eslint-disable @typescript-eslint/no-var-requires */
const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'solito',
  'react-native-web',
  '@shared/components',
  '@shared/utils',
  '@shared/pages',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = withPlugins(
  [
    withTM,
    [
      withExpo,
      {
        // Removed projectRoot property
      },
    ],
  ],
  nextConfig
);
