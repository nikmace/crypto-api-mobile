import React, { useMemo } from "react"
import { View, StyleSheet } from "react-native"
import { palette, spacing } from "../../theme"
import { SingleDigitPinInput } from "./pin-code-input-digit/pin-code-input-digit"
import { PINCodeInputProps } from "./pin-code-input.props"
import { modifyAt } from "../../utils/string"

const PIN_CODE_КEYS = [0, 1, 2, 3, 4, 5]

export const PinCodeInput = ({ showError, onChange, value }: PINCodeInputProps) => {
  const refInput = useMemo<any>(() => PIN_CODE_КEYS.map(() => React.createRef()), [])
  const onDigitFocus = (digitId: number) => {
    if (value.length === PIN_CODE_КEYS.length) {
      return
    }
    if (digitId > value.length) {
      refInput[value.length - 1]?.current.focus()
    }
  }
  const handleChangeOfDigitInput = (digit: string | undefined, idx: number): void => {
    if (typeof digit === "undefined") {
      const newDigitIndex = idx - 1
      refInput[newDigitIndex]?.current?.focus()
      return
    }

    const newDigitIndex = idx + (digit ? 1 : 0)
    if (newDigitIndex > 5) {
      const newPIN = modifyAt(value, idx, digit)
      onChange(newPIN)
      return
    }

    refInput[newDigitIndex].current.focus()
    const newPIN = modifyAt(value, idx, digit)
    onChange(newPIN)
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputContainer: {
      alignSelf: "center",
      marginHorizontal: spacing.large - 1,
      marginTop: 90,
    },
    singleInputContainer: {
      backgroundColor: palette.neutral.paleGrey,
      borderColor: palette.red,
      borderRadius: spacing.medium - 2,
      borderWidth: showError ? 3 : 0,
      color: palette.neutral.black,
      flexDirection: "row",
      height: 71,
      justifyContent: "center",
      marginBottom: spacing.huge - 4,
      width: 328,
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.singleInputContainer}>
          {PIN_CODE_КEYS.map((_, i: number) => {
            return (
              <SingleDigitPinInput
                digit={value[i] ?? ""}
                key={i}
                ref={refInput[i]}
                onDigitChange={(pin) => handleChangeOfDigitInput(pin, i)}
                onFocus={() => onDigitFocus(i)}
                secureTextEntry={true}
              />
            )
          })}
        </View>
      </View>
    </View>
  )
}
