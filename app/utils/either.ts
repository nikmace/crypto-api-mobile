import { TaskEither } from "../types/utils/either"

export const makeTaskEither = async <T>(promise: Promise<T>): TaskEither<T> => {
  try {
    const result = await promise
    return { error: null, result }
  } catch (error) {
    return { error, result: null }
  }
}
