/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1:8000', 'api.fotoprintart.ru'],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000',
            pathname: '/media/**',
          },
          {
            protocol: 'http',
            hostname: 'api.fotoprintart.ru',
            pathname: '/**',
          },
        ],
      },
    experimental: {
        workerThreads: false,
        cpus: 1
    },
};

export default nextConfig;
