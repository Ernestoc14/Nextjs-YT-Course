module.exports = {
  images: {
    domains: ['motorcycle-specs-database.p.rapidapi.com', 'api-motorcycle.makingdatameaningful.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'motorcycle-specs-database.p.rapidapi.com',
        port: '',
        pathname: '/article/**',
      },
      {
        protocol: 'https',
        hostname: 'api-motorcycle.makingdatameaningful.com',
        port: '',
        pathname: '/files/**',
      }
    ],
  },
}