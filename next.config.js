/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  // Suppress development warnings
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  webpack: (config, { isServer }) => {
    // Fix for react-konva and canvas - exclude canvas on server side
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        canvas: 'commonjs canvas',
      });
    } else {
      // Client side - don't resolve canvas
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
      };
    }

    // Ignore konva's node-specific code on server
    config.resolve.alias = {
      ...config.resolve.alias,
      'konva/lib/index-node': false,
    };

    // Suppress warnings for TensorFlow.js and MediaPipe
    config.ignoreWarnings = [
      /Critical dependency: the request of a dependency is an expression/,
      /Module not found: Can't resolve 'fs'/,
    ];

    return config;
  },
}

module.exports = nextConfig

