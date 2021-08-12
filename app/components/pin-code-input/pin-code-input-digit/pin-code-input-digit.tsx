import React from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native"
import { palette } from "../../../theme"

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: palette.blue,
    color: palette.neutral.black,
    flexDirection: "row",
    fontSize: 18,
    marginBottom: 20,
    marginHorizontal: 5,
    paddingLeft: 10,
    width: 30,
  },
})

type Props = {
  forwardRef?: any
  onDigitChange: (digit: string | undefined) => void
  digit: string
} & TextInputProps

// eslint-disable-next-line react/display-name
export const SingleDigitPinInput = React.forwardRef<any, Props>(
  ({ digit, onDigitChange, ...rest }, ref) => {
    const handleOnChangeDigit = (digit: string) => {
      const newDigit = digit[digit.length - 1]

      onDigitChange(newDigit)
    }
    const onBackspacePress = () => {
      if (digit) {
        onDigitChange("")
      } else {
        onDigitChange(undefined)
      }
    }

    return (
      <TextInput
        style={styles.input}
        maxLength={1}
        value={digit}
        keyboardType="numeric"
        secureTextEntry={false}
        onChangeText={handleOnChangeDigit}
        onKeyPress={({ nativeEvent }) =>
          nativeEvent.key === "Backspace" ? onBackspacePress() : undefined
        }
        selection={digit ? { start: 0, end: 1 } : undefined}
        ref={ref as any}
        {...rest}
      />
    )
  },
)
