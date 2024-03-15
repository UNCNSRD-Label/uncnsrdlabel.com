export function getMediaQueryForURL(url: string) {
  let match: number | undefined = undefined;

  if(url.includes('-1080p-')) {
    match = 1080;
  }

  if(url.includes('-720p-')) {
    match = 720;
  }

  // Do not match 480 to ensure there is always a source from Shopify on smaller screens
  // if(url.includes('-480p-')) {
  //   match = 480;
  // }

  if (match) {
    return `(min-width: ${match}px)`;
  }

  return undefined;
}