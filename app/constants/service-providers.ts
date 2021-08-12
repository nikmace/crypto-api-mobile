import CryptoAPIFetchService from "../services/crypto-api-fetch-service/crypo-api-fetch-service"
import CryptoAPIFetchServiceMock from "../services/crypto-api-fetch-service/__mocks__/crypo-api-fetch-service.mock"
import { ServiceProvider } from "../utils/service-provider"
import { FEATURE_FLAGS } from "./feature-flags/feature-flags"

export const SERVICE_PROVIDERS: ServiceProvider[] = [
  ...(FEATURE_FLAGS["use-crypto-api-fetch-mock-class"]
    ? [{ provide: CryptoAPIFetchService, useClass: CryptoAPIFetchServiceMock }]
    : []),
]
