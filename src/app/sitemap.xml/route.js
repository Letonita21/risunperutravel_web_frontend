import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { getItemsSitemap } from '@/lib/getSitemap'

export async function GET() {
  const baseUrl = 'https://terresdesincas.com'
  //const allTours = await getItemsSitemap()
  const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/sitemap/`)
  const allTours = await res.json();

  const tours = allTours.map((tour) => ({
    url: `/${tour.idioma}/${tour.tipo}/${tour.slug}`,
    changefreq: 'daily',
    priority: 0.8,
  }))

  const staticRoutes = [
    { url: '/es/', changefreq: 'daily', priority: 1.0 },
    { url: '/en/', changefreq: 'daily', priority: 1.0 },
    { url: '/fr/', changefreq: 'daily', priority: 1.0 },
    { url: '/es/politicas-de-privacidad', changefreq: 'monthly', priority: 0.7 },
    { url: '/es/terminos-y-condiciones', changefreq: 'monthly', priority: 0.7 },
    { url: '/es/politica-integrada-de-calidad', changefreq: 'monthly', priority: 0.7 },
    { url: '/es/politicas-de-cancelacion', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/politicas-de-privacidad', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/terminos-y-condiciones', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/politica-integrada-de-calidad', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/politicas-de-cancelacion', changefreq: 'monthly', priority: 0.7 },
    { url: '/fr/politicas-de-privacidad', changefreq: 'monthly', priority: 0.7 },
    { url: '/fr/terminos-y-condiciones', changefreq: 'monthly', priority: 0.7 },
    { url: '/fr/politica-integrada-de-calidad', changefreq: 'monthly', priority: 0.7 },
    { url: '/fr/politicas-de-cancelacion', changefreq: 'monthly', priority: 0.7 },
    { url: '/es/esnna', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/esnna', changefreq: 'monthly', priority: 0.7 },
    { url: '/fr/esnna', changefreq: 'monthly', priority: 0.7 },
    { url: '/es/filantropia', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/filantropia', changefreq: 'monthly', priority: 0.7 },
    { url: '/fr/filantropia', changefreq: 'monthly', priority: 0.7 },
  ]

  const stream = new SitemapStream({ hostname: baseUrl })
  const xml = await streamToPromise(Readable.from([...staticRoutes, ...tours]).pipe(stream))

  return new Response(xml.toString(), {
    headers: { 'Content-Type': 'application/xml' },
  })
}