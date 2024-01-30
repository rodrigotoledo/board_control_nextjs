// next.config.js
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tasks',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
