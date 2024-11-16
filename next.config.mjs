/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


module.exports = {
    async rewrites() {
      return [
        {
          source: '/some-path',
          destination: '/another-path',
        },
      ];
    },
  };
  
  module.exports = {
    output: 'export',
  };
  