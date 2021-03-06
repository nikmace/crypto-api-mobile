/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from "rxjs/Observable"

import { map } from "rxjs/operators"
import IHttpClient from "../IHttpClient"
import { inject, injectable } from "inversify"
import { IAPIConfiguration } from "../IAPIConfiguration"
import { Headers } from "../Headers"
import HttpResponse from "../HttpResponse"

import { InlineObject } from "../model/inlineObject"
import { InlineObject1 } from "../model/inlineObject1"
import { InlineResponse200 } from "../model/inlineResponse200"
import { InlineResponse2001 } from "../model/inlineResponse2001"
import { InlineResponse2002 } from "../model/inlineResponse2002"
import { InlineResponse2003 } from "../model/inlineResponse2003"
import { InlineResponse2004 } from "../model/inlineResponse2004"
import { InlineResponse2005 } from "../model/inlineResponse2005"

import { COLLECTION_FORMATS } from "../variables"

@injectable()
export class DefaultService {
  private basePath: string = "https://my.cryptoapis.io/api"

  constructor(
    @inject("IApiHttpClient") private httpClient: IHttpClient,
    @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration,
  ) {
    if (this.APIConfiguration.basePath) this.basePath = this.APIConfiguration.basePath
  }

  /**
     * Activate Device
     * 
     * @param inlineObject 
     
     */
  public activateDevice(
    inlineObject?: InlineObject,
    observe?: "body",
    headers?: Headers,
  ): Observable<InlineResponse200>
  public activateDevice(
    inlineObject?: InlineObject,
    observe?: "response",
    headers?: Headers,
  ): Observable<HttpResponse<InlineResponse200>>
  public activateDevice(
    inlineObject?: InlineObject,
    observe: any = "body",
    headers: Headers = {},
  ): Observable<any> {
    headers["Accept"] = "application/json"
    headers["Content-Type"] = "application/json"

    const response: Observable<HttpResponse<InlineResponse200>> = this.httpClient.post(
      `${this.basePath}/devices/activate`,
      inlineObject,
      headers,
    )
    if (observe === "body") {
      return response.pipe(
        map((httpResponse: HttpResponse) => <InlineResponse200>httpResponse.response),
      )
    }
    return response
  }

  /**
     * Approve Transaction by Id
     * 
     * @param txId ID of the transaction to be approved
     
     */
  public approveTransactionById(
    txId: string,
    observe?: "body",
    headers?: Headers,
  ): Observable<InlineResponse2004>
  public approveTransactionById(
    txId: string,
    observe?: "response",
    headers?: Headers,
  ): Observable<HttpResponse<InlineResponse2004>>
  public approveTransactionById(
    txId: string,
    observe: any = "body",
    headers: Headers = {},
  ): Observable<any> {
    if (txId === null || txId === undefined) {
      throw new Error(
        "Required parameter txId was null or undefined when calling approveTransactionById.",
      )
    }

    // authentication (bearerAuth) required
    if (this.APIConfiguration.username || this.APIConfiguration.password) {
      headers["Authorization"] = btoa(
        this.APIConfiguration.username + ":" + this.APIConfiguration.password,
      )
    }
    headers["Accept"] = "application/json"

    const response: Observable<HttpResponse<InlineResponse2004>> = this.httpClient.post(
      `${this.basePath}/waas/transactions-requests/${encodeURIComponent(String(txId))}/approve/`,
      headers,
    )
    if (observe === "body") {
      return response.pipe(
        map((httpResponse: HttpResponse) => <InlineResponse2004>httpResponse.response),
      )
    }
    return response
  }

  /**
     * Authenticate Device
     * 
     * @param inlineObject1 
     
     */
  public authenticateDevice(
    inlineObject1?: InlineObject1,
    observe?: "body",
    headers?: Headers,
  ): Observable<InlineResponse2001>
  public authenticateDevice(
    inlineObject1?: InlineObject1,
    observe?: "response",
    headers?: Headers,
  ): Observable<HttpResponse<InlineResponse2001>>
  public authenticateDevice(
    inlineObject1?: InlineObject1,
    observe: any = "body",
    headers: Headers = {},
  ): Observable<any> {
    headers["Accept"] = "application/json"
    headers["Content-Type"] = "application/json"

    const response: Observable<HttpResponse<InlineResponse2001>> = this.httpClient.post(
      `${this.basePath}/devices/authenticate`,
      inlineObject1,
      headers,
    )
    if (observe === "body") {
      return response.pipe(
        map((httpResponse: HttpResponse) => <InlineResponse2001>httpResponse.response),
      )
    }
    return response
  }

  /**
     * List Awaiting Approval Transactions
     * 
     * @param offset Offset to start from
     * @param limit The numbers of items to return
     
     */
  public listAwaitingApprovalTransactions(
    offset?: number,
    limit?: number,
    observe?: "body",
    headers?: Headers,
  ): Observable<InlineResponse2002>
  public listAwaitingApprovalTransactions(
    offset?: number,
    limit?: number,
    observe?: "response",
    headers?: Headers,
  ): Observable<HttpResponse<InlineResponse2002>>
  public listAwaitingApprovalTransactions(
    offset?: number,
    limit?: number,
    observe: any = "body",
    headers: Headers = {},
  ): Observable<any> {
    let queryParameters: string[] = []
    if (offset !== undefined) {
      queryParameters.push("offset=" + encodeURIComponent(String(offset)))
    }
    if (limit !== undefined) {
      queryParameters.push("limit=" + encodeURIComponent(String(limit)))
    }

    // authentication (bearerAuth) required
    if (this.APIConfiguration.username || this.APIConfiguration.password) {
      headers["Authorization"] = btoa(
        this.APIConfiguration.username + ":" + this.APIConfiguration.password,
      )
    }
    headers["Accept"] = "application/json"

    const response: Observable<HttpResponse<InlineResponse2002>> = this.httpClient.get(
      `${this.basePath}/waas/transactions-requests?${queryParameters.join("&")}`,
      headers,
    )
    if (observe === "body") {
      return response.pipe(
        map((httpResponse: HttpResponse) => <InlineResponse2002>httpResponse.response),
      )
    }
    return response
  }

  /**
     * Reject Transaction by Id
     * 
     * @param txId ID of the transaction to be rejected
     
     */
  public rejectTransactionById(
    txId: string,
    observe?: "body",
    headers?: Headers,
  ): Observable<InlineResponse2005>
  public rejectTransactionById(
    txId: string,
    observe?: "response",
    headers?: Headers,
  ): Observable<HttpResponse<InlineResponse2005>>
  public rejectTransactionById(
    txId: string,
    observe: any = "body",
    headers: Headers = {},
  ): Observable<any> {
    if (txId === null || txId === undefined) {
      throw new Error(
        "Required parameter txId was null or undefined when calling rejectTransactionById.",
      )
    }

    // authentication (bearerAuth) required
    if (this.APIConfiguration.username || this.APIConfiguration.password) {
      headers["Authorization"] = btoa(
        this.APIConfiguration.username + ":" + this.APIConfiguration.password,
      )
    }
    headers["Accept"] = "application/json"

    const response: Observable<HttpResponse<InlineResponse2005>> = this.httpClient.post(
      `${this.basePath}/waas/transactions-requests/${encodeURIComponent(String(txId))}/reject/`,
      headers,
    )
    if (observe === "body") {
      return response.pipe(
        map((httpResponse: HttpResponse) => <InlineResponse2005>httpResponse.response),
      )
    }
    return response
  }

  /**
     * Show Transaction Request Details
     * 
     * @param txId ID of the transaction to be approved
     
     */
  public showTransactionRequestDetails(
    txId: string,
    observe?: "body",
    headers?: Headers,
  ): Observable<InlineResponse2003>
  public showTransactionRequestDetails(
    txId: string,
    observe?: "response",
    headers?: Headers,
  ): Observable<HttpResponse<InlineResponse2003>>
  public showTransactionRequestDetails(
    txId: string,
    observe: any = "body",
    headers: Headers = {},
  ): Observable<any> {
    if (txId === null || txId === undefined) {
      throw new Error(
        "Required parameter txId was null or undefined when calling showTransactionRequestDetails.",
      )
    }

    // authentication (bearerAuth) required
    if (this.APIConfiguration.username || this.APIConfiguration.password) {
      headers["Authorization"] = btoa(
        this.APIConfiguration.username + ":" + this.APIConfiguration.password,
      )
    }
    headers["Accept"] = "application/json"

    const response: Observable<HttpResponse<InlineResponse2003>> = this.httpClient.get(
      `${this.basePath}/waas/transactions-requests/${encodeURIComponent(String(txId))}`,
      headers,
    )
    if (observe === "body") {
      return response.pipe(
        map((httpResponse: HttpResponse) => <InlineResponse2003>httpResponse.response),
      )
    }
    return response
  }
}
