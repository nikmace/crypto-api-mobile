import { load, save } from "../../utils/keychain"

export class PinCodeService {
  private user = "crypto-api-user"
  private server = "pinCode"

  savePin = async (pin: string): Promise<void> => {
    await save(this.user, pin, this.server)
  }

  /**
   * @returns Pin code or null if no pin is set
   */
  getPin = async (): Promise<string | null> => {
    const result = await load(this.server)

    return result?.password
  }
}
