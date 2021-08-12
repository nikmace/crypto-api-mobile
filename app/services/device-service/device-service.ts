import { getDeviceId } from "react-native-device-info"
import { InlineResponse2001DataItem } from "../../../__generated__/api-client"
import { load, save } from "../../utils/keychain"
import CryptoAPIFetchService from "../crypto-api-fetch-service/crypo-api-fetch-service"
type AuthToken = InlineResponse2001DataItem
type AuthTokenWithExpiryTimestamp = AuthToken & { expiryTimestamp: number }
export default class DeviceService {
  private cryptoAPIFetchService = new CryptoAPIFetchService()
  private authenticationTokenServer = "authentication-token"
  private authCodeServer = "auth-code"
  private user = "crypto-api-user"
  private getAuthCodeFromKeychain = async (): Promise<string | null> => {
    const { password } = await load(this.authCodeServer)

    if (!password) {
      return null
    }

    return password
  }

  private getAuthenticationTokenFromKeychain = async (): Promise<AuthTokenWithExpiryTimestamp | null> => {
    const { password } = await load(this.authenticationTokenServer)

    if (!password) {
      return null
    }

    return JSON.parse(password)
  }

  static shouldGetNewToken = (token: AuthTokenWithExpiryTimestamp): boolean => {
    const expiryDate = new Date(token.expiryTimestamp)
    if (expiryDate > new Date()) {
      return true
    }

    return false
  }

  /**
   *
   * @param activationToken
   * @returns authCode
   */
  activateDevice = async (activationCode: string): Promise<string> => {
    const clientId = "from-where-to-get-information-for-this-field-?"
    const userId = "from-where-to-get-information-for-this-field-?"
    const deviceId = getDeviceId()
    const deviceData = {} // what device data you need?
    const authCode = await this.cryptoAPIFetchService.activateDevice({
      activationCode,
      clientId,
      userId,
      deviceId,
      deviceData,
    })

    await save(this.user, authCode, this.authCodeServer)

    return authCode
  }

  authenticateDevice = async (authCode: string) => {
    const clientId = "from-where-to-get-information-for-this-field-?"
    const userId = "from-where-to-get-information-for-this-field-?"
    const deviceId = getDeviceId()
    const result = await this.cryptoAPIFetchService.authenticateDevice({
      authCode,
      deviceId,
      clientId,
      userId,
    })

    const expiryTimestamp = Date.now() + Number(result.expiresIn) * 1000 - 15000 // 15000 for request delay
    const token: AuthTokenWithExpiryTimestamp = { ...result, expiryTimestamp }

    await save(this.user, JSON.stringify(token), this.authenticationTokenServer)

    return token
  }

  getAuthenticationToken = async (): Promise<AuthTokenWithExpiryTimestamp> => {
    const savedAuthCode = await this.getAuthCodeFromKeychain()

    if (!savedAuthCode) {
      throw new Error(`Device must be activated.`)
    }

    const savedToken = await this.getAuthenticationTokenFromKeychain()

    if (!savedToken) {
      const token = await this.authenticateDevice(savedAuthCode)

      return token
    }

    if (DeviceService.shouldGetNewToken(savedToken)) {
      const token = await this.authenticateDevice(savedAuthCode)

      return token
    }

    return savedToken
  }
}
