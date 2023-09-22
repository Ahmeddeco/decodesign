export default function manifest() {
  return {
    name: 'Deco Design',
    short_name: 'Deco Design',
    description: 'Deco Design for 3D interior designs',
    start_url: '/',
    display: 'standalone',
    background_color: '#161615',
    theme_color: '#161615',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
