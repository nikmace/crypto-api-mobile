const env = require("../config/env")

export const ENVIRONMENT: "dev" | "local" = env.ENVIRONMENT

export const SENTRY_DSN: string = env.SENTRY_DSN
