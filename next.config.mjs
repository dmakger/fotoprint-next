/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1:8000', 'api.fotoprintart.ru'],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1:8000',
            pathname: '/media/**',
          },
          {
            protocol: 'http',
            hostname: 'api.fotoprintart.ru',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
