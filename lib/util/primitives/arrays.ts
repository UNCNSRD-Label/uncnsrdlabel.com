export const cleanArray = <T>(arr: (T | undefined | null)[]): T[] =>
  arr.filter(Boolean) as T[]

type TNonEmptyArray<T> = [T, ...T[]]
export const hasArrayGotItems = <T>(
  data?: Array<T> | null
): data is TNonEmptyArray<T> => !!data && Array.isArray(data) && data.length > 0
