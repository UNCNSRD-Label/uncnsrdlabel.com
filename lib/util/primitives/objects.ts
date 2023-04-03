export const hasObjectGotKeys = <T extends {}>(
  data: T | null | undefined | {}
): data is T => !!data && Object.keys(data).length > 0

export const jsonSafeParse = <T = any>(src: any): T | undefined => {
  try {
    return JSON.parse(src)
  } catch (error: any) {
    console.error(`(jsonSafeParse) ${error.message}`, { src, error })
    return undefined
  }
}

export const jsonSafeStringify = (src: any): string => {
  try {
    if (typeof src === 'string') {
      return src
    }
    return JSON.stringify(src)
  } catch (error: any) {
    console.error(`(jsonSafeStringify) ${error.message}`, { src, error })
    return ''
  }
}
