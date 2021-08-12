/* eslint-disable import/first */
/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler"
import { errorHandler, initSentry, nativeErrorHandler } from "./sentry"
setJSExceptionHandler(errorHandler)
setNativeExceptionHandler(nativeErrorHandler)

import { SENTRY_DSN } from "./constants/environment"

if (SENTRY_DSN) {
  initSentry(SENTRY_DSN)
} else {
  console.log("Sentry not connected because SENTRY_DSN variables is not provided.")
}

import "./i18n"
import "./utils/ignore-warnings"
import "./config/env.js"
import React, { useEffect, useRef } from "react"
import { NavigationContainerRef } from "@react-navigation/native"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo

import * as storage from "./utils/storage"
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from "./navigators"
import { ToggleStorybook } from "../storybook/toggle-storybook"
// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import { enableScreens } from "react-native-screens"
import { ServiceProviderContext } from "./contexts/service-provider.context"
import { SERVICE_PROVIDERS } from "./constants/service-providers"

enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>(null)

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)
  const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  )

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      await initFonts() // expo
    })()
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.

  // otherwise, we're ready to render the app
  return (
    <ToggleStorybook>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ServiceProviderContext.Provider value={SERVICE_PROVIDERS}>
          <RootNavigator
            ref={navigationRef}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </ServiceProviderContext.Provider>
      </SafeAreaProvider>
    </ToggleStorybook>
  )
}

export default App
