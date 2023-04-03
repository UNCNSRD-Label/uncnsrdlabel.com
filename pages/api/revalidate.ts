import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { secret } = req.query as {
    secret: string
  }

  // Check for secret to confirm this is a valid request
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const body = JSON.parse(req?.body)

  const articleTypesPathMap = new Map()

  articleTypesPathMap.set('edit', 'whats-new')
  articleTypesPathMap.set('page', undefined)
  articleTypesPathMap.set('story', 'stories')

  const articleType = body?.sys?.contentType?.sys?.id

  const section = articleTypesPathMap.get(articleType)

  let category = undefined
  const slug = body?.fields?.slug?.['en-GB']

  if (articleType === 'edit') {
    category = body?.fields?.category?.['en-GB']
  }

  if (articleType === 'story') {
    category = body?.fields?.category?.['en-GB']?.sys?.id
  }

  const pathParts = [section, category, slug].filter((value) => value) // filter undefined path parts

  const erroneousSeparator = new RegExp('//', 'g')

  const path = `/${pathParts.join('/')}`.replace(erroneousSeparator, '/')

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(path)

    return res.json({ path, revalidated: true })
  } catch (error) {
    console.error(error)
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(`Error revalidating ${path}`)
  }
}
