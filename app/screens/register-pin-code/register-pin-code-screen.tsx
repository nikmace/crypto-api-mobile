import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import { Screen, Text, PinCodeInput, Header, Icon } from "../../components"
import { palette, spacing } from "../../theme"
import en from "../../i18n/en.json"
import { useNavigation } from "../../hooks"

export const RegisterPinCodeScreen = () => {
  const [error, setError] = useState(false)
  const [PIN, setPIN] = useState("")
  const [PINApprove, setPINApprove] = useState("")
  const { navigate } = useNavigation()
  useEffect(() => {
    if (PIN.length === 6 && PINApprove.length === 6) {
      if (PIN === PINApprove) {
        navigate("transactionsApproval")
      }
    }
  }, [PIN, PINApprove])

  const onConfirmPinTextChange = (pinCode: string) => {
    setPINApprove(pinCode)

    if (pinCode.length === 6 && PIN.length === 6) {
      if (PIN !== pinCode) {
        setError(true)
      }
    } else {
      setError(false)
    }
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.header}>
        <Header title={<Icon style={styles.icon} icon={"logo"} />} />
      </View>

      <View style={styles.titleView}>
        <Text text={en.registerPinCode.title} preset={"mobile.h2"} style={styles.text} />
      </View>

      <PinCodeInput value={PIN} onChange={(pinCode: string) => setPIN(pinCode)} showError={error} />

      <PinCodeInput
        value={PINApprove}
        onChange={(pinCode: string) => onConfirmPinTextChange(pinCode)}
        showError={error}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    marginVertical: spacing.small,
    position: "relative",
  },
  icon: {
    alignSelf: "center",
    height: 30,
    width: 125,
  },
  screen: {
    backgroundColor: palette.neutral.white,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.huge - spacing.large,
    justifyContent: "space-between",
  },
  text: {
    color: palette.neutral.black,
    textAlign: "center",
  },
  titleView: {
    flex: 0.5,
    position: "relative",
  },
})
