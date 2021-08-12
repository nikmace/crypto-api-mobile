import * as React from "react"
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { Text } from "../text/text"
import { ButtonProps } from "./button.props"
import { spacing } from "../../theme/spacing"
import { palette } from "../../theme/palette"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const { tx, text, style: styleOverride, textStyle: textStyleOverride, children, ...rest } = props

  const viewStyle: ViewStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: spacing.large - 6,
  }

  const viewStyles = [viewStyle, styleOverride]

  const textStyle: TextStyle = {
    color: palette.neutral.white,
  }

  const textStyles = [textStyle, textStyleOverride]

  const content = children || (
    <Text preset="elements.medium" tx={tx} text={text} style={textStyles} />
  )

  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
