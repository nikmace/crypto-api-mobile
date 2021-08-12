import { createContext } from "react"
import { SERVICE_PROVIDERS } from "../constants/service-providers"
import { ServiceProvider } from "../utils/service-provider"

export const ServiceProviderContext = createContext<ServiceProvider[]>(SERVICE_PROVIDERS)
