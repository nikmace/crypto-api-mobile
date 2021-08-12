import { useEffect, useState } from "react"
import { LoadingEither } from "../types/utils/either"
import { makeTaskEither } from "../utils/either"

export const usePromise = <T,>(promise: Promise<T>): LoadingEither<T> => {
  const [loadingEither, setLoadingEither] = useState<LoadingEither<T>>({
    loading: true,
    error: null,
    result: null,
  })

  useEffect(() => {
    const taskEither = makeTaskEither(promise)
    taskEither.then((r) => setLoadingEither({ loading: false, ...r }))
  }, [])

  return loadingEither
}
