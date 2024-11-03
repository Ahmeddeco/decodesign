export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://decodesign-jet.vercel.app/sitemap.xml',
  }
}