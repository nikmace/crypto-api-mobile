import { FEATURE_FLAGS_DICT } from "../feature-flags"

export const FEATURE_FLAGS_PROD: typeof FEATURE_FLAGS_DICT = {
  "use-crypto-api-fetch-mock-class": false,
}

module.exports = FEATURE_FLAGS_PROD
