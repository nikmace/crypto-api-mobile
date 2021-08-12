export const thrower = (error: string | Error): never => {
  if (error instanceof Error) {
    throw error
  }

  throw new Error(error)
}
