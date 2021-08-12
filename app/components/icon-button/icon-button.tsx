import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "../icon/icon"
import { IconButtonProps } from "./icon-button.props"

export function IconButton(props: IconButtonProps) {
  const { icon, style: styleOverride, containerStyle, ...rest } = props

  const content = <Icon icon={icon} style={styleOverride} containerStyle={containerStyle} />

  return <TouchableOpacity {...rest}>{content}</TouchableOpacity>
}
