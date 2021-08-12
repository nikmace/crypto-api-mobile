import axios, { AxiosResponse } from "axios"
import {
  DefaultApi,
  DevicesActivateDataItem,
  DevicesAuthenticateDataItem,
} from "../../../__generated__/api-client"
export interface CryptoAPIFetchPagination {
  offset?: number | undefined
  limit?: number | undefined
}

export default class CryptoAPIFetchService {
  constructor() {
    this.deviceService = (null as never) as any

    this.generatedAPIService = new DefaultApi(undefined, undefined, axios)
  }

  private getAuthorizationHeaders = async () => {
    const token = await this.deviceService.getAuthenticationToken()
    return { Authorization: `${token.tokenType} ${token.accessToken}` }
  }

  private static addBodyDefaultLetter = <T>(dataItem: T) => {
    return { data: { item: dataItem }, context: "mobile" }
  }

  private static extractItemFromResponseLetter = <
    Response extends AxiosResponse<{ data: { item: any } }>
  >(
    response: Response,
  ): Response["data"]["data"]["item"] => {
    return response.data.data.item
  }

  private generatedAPIService: DefaultApi

  private deviceService: any

  /**
   * @returns Device authorization code
   */
  activateDevice = async (body: DevicesActivateDataItem): Promise<string> => {
    const letter = CryptoAPIFetchService.addBodyDefaultLetter(body)
    const response = await this.generatedAPIService.activateDevice(letter)

    const { code } = CryptoAPIFetchService.extractItemFromResponseLetter(response)

    return code
  }

  approveTransactionById = async (transactionId: string) => {
    const response = await this.generatedAPIService.approveTransactionById(transactionId)
    console.log(response)
    return CryptoAPIFetchService.extractItemFromResponseLetter(response)
  }

  authenticateDevice = async (params: DevicesAuthenticateDataItem) => {
    const headers = await this.getAuthorizationHeaders()

    const letter = CryptoAPIFetchService.addBodyDefaultLetter(params)

    const response = await this.generatedAPIService.authenticateDevice(letter, { headers })
    return CryptoAPIFetchService.extractItemFromResponseLetter(response)
  }

  listAwaitingApprovalTransactions = async ({ limit, offset }: CryptoAPIFetchPagination) => {
    const headers = await this.getAuthorizationHeaders()
    const response = await this.generatedAPIService.listAwaitingApprovalTransactions(
      offset,
      limit,
      { headers },
    )
    return response.data
  }

  rejectTransactionById = async (transactionId: string) => {
    const headers = await this.getAuthorizationHeaders()
    const response = await this.generatedAPIService.rejectTransactionById(transactionId, {
      headers,
    })
    return CryptoAPIFetchService.extractItemFromResponseLetter(response)
  }

  showTransactionRequestDetails = async (transactionId: string) => {
    const headers = await this.getAuthorizationHeaders()
    const response = await this.generatedAPIService.showTransactionRequestDetails(transactionId, {
      headers,
    })
    return CryptoAPIFetchService.extractItemFromResponseLetter(response)
  }
}
