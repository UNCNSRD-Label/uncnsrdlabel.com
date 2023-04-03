import { BASE_URL } from '#/lib/constants/config'

const config = {
  title: 'Collagerie',
  titleTemplate: '%s - Collagerie.com',
  description:
    'Expertly curating the best of fashion, interiors, beauty and lifestyle. We celebrate shopping at every price point, bringing you an innovative way to discover things you’ll love.',
  openGraph: {
    title: 'Collagerie',
    description:
      'Expertly curating the best of fashion, interiors, beauty and lifestyle. We celebrate shopping at every price point, bringing you an innovative way to discover things you’ll love.',
    type: 'website',
    locale: 'en_GB',
    url: `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}`,
    site_name: 'Collagerie',
    images: [
      {
        url: '/ogimage.jpg',
        width: 800,
        height: 600,
        alt: 'Collagerie',
      },
    ],
  },
  twitter: {
    handle: '@CollagerieLive',
    site: '@CollagerieLive',
    cardType: 'summary_large_image',
  },
}

export default config
