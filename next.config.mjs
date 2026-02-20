/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'risunperutravel.com',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/laguna-humantay',
        destination: '/es/tours-1-dia/laguna-humantay',
        permanent: true,
      },
      {
        source: '/valle-sagrado-vip',
        destination: '/es/tours-1-dia/valle-sagrado-vip',
        permanent: true,
      },
      {
        source: '/montana-palcoyo',
        destination: '/es/tours-1-dia/montana-de-palcoyo', 
        permanent: true,
      },
      {
        source: '/huayna-picchu-full-day-1',
        destination: '/es/tours-1-dia/macchu-picchu-full-day', 
        permanent: true,
      },
      {
        source: '/qeswachaka',
        destination: '/es/tours-1-dia/qeswachaka-el-ultimo-puente-inca',
        permanent: true,
      },
      {
         source: '/7-lagunas-ausangate',
         destination: '/es/tours-1-dia/7-lagunas-ausangate',
         permanent: true,
      },
      {
        source: '/camino-inca-4d-3n',
        destination: '/es/camino-inca/camino-inca-4-dias',
        permanent: true,
      },
      {
        source: '/camino-inca-2-dias',
        destination: '/es/camino-inca/camino-inca-2-dias',
        permanent: true,
      },

      {
        source: '/salkantay-trek',
        destination: '/es/caminatas/salkantay-trek-de-los-apus-a-machu-picchu',
        permanent: true,
      },
      {
        source: '/choquequirao',
        destination: '/es/caminatas/choquequirao-caminata',
        permanent: true,
      },
      {
        source: '/ausangate',
        destination: '/es/caminatas/ausangate-una-travesia-al-corazon-de-los-andes',
        permanent: true,
      },
      {
        source: '/misterios-del-peru',
        destination: '/es/vacacionesperu/misterios-del-peru',
        permanent: true,
      },
       {
        source: '/peru-magico', 
        destination: '/es/vacacionesperu/misterios-del-peru', 
        permanent: true,
      },
      {
        source: '/product/:slug',
        destination: '/es/tours/:slug',
        permanent: true,
      },

      {
        source: '/tours/:slug',
        destination: '/es/tours/:slug',
        permanent: true,
      },

      {
        source: '/politicas-de-privacidad',
        destination: '/es/politicas-de-privacidad',
        permanent: true,
      },
      {
        source: '/terminos-y-condiciones',
        destination: '/es/terminos-y-condiciones',
        permanent: true,
      },
      {
        source: '/:slug/feed',
        destination: '/es/tours/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;