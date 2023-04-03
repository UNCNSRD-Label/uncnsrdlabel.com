export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL

// Contentful
export const CONTENTFUL_MAX_INCLUDE_DEPTH = 10
export const CONTENTFUL_MAX_PAGE_SIZE = 100

export const LISTING_PAGE_SIZE = 9
export const HP_CURATION_PRODUCTS_LIMIT = 3

export const DISCOVER_LISTING_ITEMS = 15
export const STORIES_LISTING_ITEMS = 9

export const SEARCH_RESULTS_ITEMS = 52
export const SEARCH_SUGGESTIONS_ITEMS = 4

// Paths
export const PATH_DISCOVER = '/discover'
export const PATH_STORIES = '/stories'

// default metadata
export const ORGANISATION_NAME = 'Collagerie'

// Facebook recommended dimensions
export const META_IMAGE_DEFAULT_DIMENSIONS = {
  height: 630,
  width: 1200,
}

// square dimensions for portrait images to avoid clipping product pictures
export const META_IMAGE_SQUARE_DIMENSIONS = {
  height: 1200,
  width: 1200,
}

// module config
export const HERO_MODULE_SUPPORTING_IMAGES_SIZE = [
  {
    height: 600,
    width: 600,
  },
  {
    height: 800,
    width: 800,
  },
  {
    height: 600,
    width: 500,
  },
]
