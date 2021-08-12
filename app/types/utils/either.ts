export type Left = { error: Error; result: null }
export type Right<T> = { error: null; result: T }

type Either<T> = Left | Right<T>

export type TaskEither<T> = Promise<Either<T>>

export type LoadingEither<T> =
  | (Either<T> & { loading: false })
  | { loading: true; error: null; result: null }

export default Either
