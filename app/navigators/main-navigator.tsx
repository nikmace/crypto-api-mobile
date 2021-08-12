/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  OnboardingScreen,
  OnboardingQRCodeScanner,
  TransactionScreen,
  TransactionConfirm,
  RegisterPinCodeScreen,
  SuccessScreen,
  TransactionSummaryScreen,
} from "../screens"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  transactionsApproval: undefined
  onboarding: undefined
  transactionsummaryscreen: { transactionId: string }
  onboardingQRCodeScanner: undefined
  registerPinCode: undefined
  successSplash: { screen: keyof PrimaryParamList }
  transactionConfirm: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="onboardingQRCodeScanner" component={OnboardingQRCodeScanner} />
      <Stack.Screen name="registerPinCode" component={RegisterPinCodeScreen} />
      <Stack.Screen name="successSplash" component={SuccessScreen} />
      <Stack.Screen name="transactionsApproval" component={TransactionScreen} />
      <Stack.Screen
        initialParams={{ transactionId: "test-id" }}
        name="transactionsummaryscreen"
        component={TransactionSummaryScreen}
      />
      <Stack.Screen name="transactionConfirm" component={TransactionConfirm} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["onboarding", "transactionsApproval"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
