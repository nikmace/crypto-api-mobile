import * as React from "react"
import { View, ViewStyle } from "react-native"
import { spacing } from "../../theme"
import { palette } from "../../theme/palette"
import { CardProps } from "./card-props"

const CARD_CONTAINER: ViewStyle = {
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  padding: spacing.large - 8,
  backgroundColor: palette.neutral.paleGrey,
  borderRadius: spacing.medium - 2,
}
export function Card(props: CardProps) {
  const { children, style: styleOverride, ...rest } = props
  const styles = [CARD_CONTAINER, styleOverride]
  return (
    <View style={styles} {...rest}>
      {children}
    </View>
  )
}
