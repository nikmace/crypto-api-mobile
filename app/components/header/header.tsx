import React from "react"
import { View, ViewStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing.large,
  alignItems: "center",
  paddingTop: spacing.large,
  paddingBottom: spacing.large,
  justifyContent: "flex-start",
}
const TITLE: ViewStyle = { justifyContent: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const { onLeftPress, onRightPress, rightIcon, leftIcon, style, title } = props

  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <View style={TITLE}>{title}</View>
      </View>
      {rightIcon ? (
        <Button onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
