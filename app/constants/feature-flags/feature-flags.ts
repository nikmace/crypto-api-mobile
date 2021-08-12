import { ENVIRONMENT } from "../environment"

export const FEATURE_FLAGS_DICT = {
  "use-crypto-api-fetch-mock-class": false,
}
export const FEATURE_FLAGS: typeof FEATURE_FLAGS_DICT = (() => {
  switch (ENVIRONMENT) {
    case "dev":
      throw new Error("not implemented")
    case "local":
      return require("./stages/feature-flags-local.constants")
  }
})()
