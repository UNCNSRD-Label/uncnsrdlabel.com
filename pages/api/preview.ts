import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { path, secret } = req.query as {
    path: string
    secret: string
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !path) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  res.setHeader('Content-Type', 'text/html; charset=UTF-8')

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // Update: Yes we do because the secret should be enough?
  // res.writeHead(307, { Location: slug })
  res.write(
    `<!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Refresh" content="0; url=${path}" />
          <script>window.location.href = '${path}'</script>
        </head>
      </html>
    `
  )

  res.end()
}
