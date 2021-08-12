import {
  DevicesActivateDataItem,
  InlineResponse2004DataItem,
  DevicesAuthenticateDataItem,
  InlineResponse2001DataItem,
  InlineResponse2002,
  InlineResponse2005DataItem,
  InlineResponse2002DataItems,
} from "../../../../__generated__/api-client"
import CryptoAPIFetchService, { CryptoAPIFetchPagination } from "../crypo-api-fetch-service"

export const createMockTransaction = (
  transaction?: Partial<InlineResponse2002DataItems>,
): InlineResponse2002DataItems => {
  const mockTransaction: InlineResponse2002DataItems = {
    id: "1",
    walletId: "test wallet id",
    status: "hi",
    blockchain: "BTC",
    network: "Test network",
    feePriority: "unknown information",
    walletName: "Wallet name",
    rejects: [],
    rejecters: [],
    requiredRejectsCount: 1,
    amount: (Math.random() * 1000).toFixed(5),
    amountInRelationUnitAsset: "hello",
    approvers: [],
    approvals: [],
    canApprove: false,
    requiredApprovalsCount: 1,
    canReject: false,
    context: "mobile",
    createdTimestamp: new Date().toString(),
    destinations: [{ address: "Test address", amount: (Math.random() * 1000).toFixed(5) }],
    ...transaction,
  }

  return mockTransaction
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Private fields cannot be used with implements
export default class CryptoAPIFetchServiceMock implements CryptoAPIFetchService {
  activateDevice: (body: DevicesActivateDataItem) => Promise<string> = async () => {
    return "DeviceAuthorizationMockCode"
  }

  approveTransactionById: (
    transactionId: string,
  ) => Promise<InlineResponse2004DataItem> = async () => {
    const body: InlineResponse2004DataItem = {
      action: "actionMockValue",
      status: "statusMockValue",
    }

    return body
  }

  authenticateDevice: (
    params: DevicesAuthenticateDataItem,
  ) => Promise<InlineResponse2001DataItem> = async () => {
    const inlineResponse: InlineResponse2001DataItem = {
      accessToken: "accessTokenMockValue",
      tokenType: "tokenTypeMockValue",
      expiresIn: new Date(Date.now() + 1000000).toString(),
    }

    return inlineResponse
  }

  listAwaitingApprovalTransactions: ({
    limit,
    offset,
  }: CryptoAPIFetchPagination) => Promise<InlineResponse2002> = async ({
    limit = 1000,
    offset = 0,
  }) => {
    const response: InlineResponse2002 = {
      apiVersion: "1",
      context: "mobile",
      data: {
        limit,
        offset,
        total: 100,
        items: [...new Array(10).keys()].map((key) =>
          createMockTransaction({ id: key.toString() }),
        ),
      },
    }

    return response
  }

  rejectTransactionById: (
    transactionId: string,
  ) => Promise<InlineResponse2005DataItem> = async () => {
    const response: InlineResponse2005DataItem = { action: "some action", status: "some status" }

    return response
  }

  showTransactionRequestDetails: (
    transactionId: string,
  ) => Promise<InlineResponse2002DataItems> = async (transactionId) => {
    const response: InlineResponse2002DataItems = {
      id: transactionId,
      walletId: "test wallet id",
      status: "hi",
      blockchain: "BTC",
      network: "Test network",
      feePriority: "unknown information",
      walletName: "Wallet name",
      rejects: [],
      rejecters: [],
      requiredRejectsCount: 1,
      amount: (Math.random() * 1000).toFixed(5),
      amountInRelationUnitAsset: "hello",
      approvers: [],
      approvals: [],
      canApprove: false,
      requiredApprovalsCount: 1,
      canReject: false,
      context: "mobile",
      createdTimestamp: new Date().toString(),
      destinations: [{ address: "Test address", amount: (Math.random() * 1000).toFixed(5) }],
    }

    return response
  }
}
