import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    host: 'https://www.frontendcorner.dev',
    sitemap: 'https://www.frontendcorner.dev/sitemap.xml'
  }
}