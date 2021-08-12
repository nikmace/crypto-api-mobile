export const modifyAt = (string: string, index: number, char: string): string =>
  string.substring(0, index) + char + string.substring(index + 1)
