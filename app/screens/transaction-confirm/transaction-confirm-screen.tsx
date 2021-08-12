import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Screen, Header, Icon, PinCodeInput } from "../../components"
import { palette, spacing } from "../../theme"
import { useSuccessSplashScreen } from "../../hooks/use-success-splash-screen"

const styles = StyleSheet.create({
  header: {
    marginVertical: spacing.small,
    position: "relative",
  },
  icon: {
    alignSelf: "center",
    height: 30,
    width: 125,
  },
  pinView: {
    flex: 0.5,
  },
  screen: {
    backgroundColor: palette.neutral.white,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  text: {
    color: palette.neutral.black,
    textAlign: "center",
  },
  titleView: {
    flex: 0.3,
    position: "relative",
  },
})

export const TransactionConfirm = () => {
  const [pin, setPIN] = useState("")
  const splash = useSuccessSplashScreen()
  const onPinInputHandler = (textInput: string) => {
    if (textInput.length > 5) {
      splash("transactionsApproval")
    }
    setPIN(textInput)
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.header}>
        <Header title={<Icon style={styles.icon} icon={"logo"} />} />
      </View>
      <View style={styles.titleView}>
        <Text tx={"transactionConfirm.title"} preset={"mobile.h2"} style={styles.text} />
      </View>
      <View style={styles.pinView}>
        <PinCodeInput value={pin} onChange={(pinCode: string) => onPinInputHandler(pinCode)} />
      </View>
    </Screen>
  )
}
