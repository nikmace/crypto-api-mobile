import * as Sentry from "@sentry/react-native"
import { JSExceptionHandler } from "react-native-exception-handler"
import { Alert, BackHandler } from "react-native"

export const errorHandler: JSExceptionHandler = (e: Error, isFatal: boolean) => {
  Alert.alert(
    "Oops there seems to be something wrong!",
    `
  Error : ${"\n"} ${isFatal ? "Fatal:" : ""}${e.name} ${e.message}
  ${"\n"} We will send a report to our team ,please restart your app
  `,
    [
      {
        text: "Close App",
        onPress: BackHandler.exitApp,
      },
    ],
  )
}

export const nativeErrorHandler = (exceptionString: string) => {
  console.log(exceptionString)
}

export const initSentry = (sentryDSN: string) => {
  Sentry.init({
    dsn: sentryDSN, // End point for the  Domain Name System in the sentry project
    enableNative: true,
    enableNativeCrashHandling: true,
    enabled: true,
    debug: true,
  })
}
