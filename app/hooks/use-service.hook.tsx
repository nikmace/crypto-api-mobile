import { useContext, useMemo, useState } from "react"
import { LoadingEither } from "../types/utils/either"
import { makeTaskEither } from "../utils/either"
import { upperFirst } from "lodash-es"
import SubType from "../types/utils/sub-type"
import { ServiceProviderContext } from "../contexts/service-provider.context"

type LoadingEitherWithFetch<T, Args extends any[]> = LoadingEither<T> & {
  fetch: (...args: Args) => void
}

type Hooking<T> = {
  [i in keyof T & string as `use${Capitalize<i>}`]: T[i] extends (
    ...args: infer Args
  ) => Promise<infer R>
    ? () => LoadingEitherWithFetch<R, Args>
    : T[i]
}

type UseServiceReturnType<Class extends { new (...args: any): any }> = {
  hooks: Hooking<SubType<InstanceType<Class>, (_: any) => Promise<any>>>
  instance: InstanceType<Class>
}

export const useService = <Class extends { new (...args: Args): any }, Args extends any[]>(
  Service: Class,
  ...constructorArgs: Args
): UseServiceReturnType<Class> => {
  const serviceProviders = useContext(ServiceProviderContext)
  const ProvidedService = serviceProviders.find((p) => p.provide === Service)?.useClass ?? Service
  const instance = useMemo(() => new ProvidedService(...constructorArgs), [
    ProvidedService,
    constructorArgs,
  ])

  const [loadingMap, setLoadingMap] = useState<Record<string, LoadingEitherWithFetch<any, any>>>({})

  const hookEntries = useMemo(
    () =>
      Object.entries(instance).flatMap(([key, value]) => {
        if (typeof value === "function") {
          const fetch = (...args: Args) => {
            const promise = value(...args)
            const taskEither = makeTaskEither(value(...args))
            if (!promise?.then) {
              throw new Error(`Sync method was tried to be used as an async.`)
            }
            const initialState = {
              loading: true,
              fetch,
              error: null,
              result: null,
            }
            const newMap = { ...loadingMap, [key]: initialState }
            setLoadingMap(newMap)
            taskEither.then((r) => {
              const loadingEither: LoadingEitherWithFetch<any, any> = {
                loading: false,
                fetch,
                ...r,
              }
              const newMap = { ...loadingMap, [key]: loadingEither }
              setLoadingMap(newMap)
            })
          }
          const hook = [
            `use${upperFirst(key)}`,
            () => loadingMap[key] ?? { loading: true, fetch, result: null, error: null },
          ] as const

          return [[key, value], hook] as const
        }
        return [[key, value]] as const
      }),
    [JSON.stringify(loadingMap)],
  )
  const hooks = useMemo(() => Object.fromEntries(hookEntries), hookEntries) as any

  return { hooks, instance }
}
