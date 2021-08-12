import * as React from "react"

import { IconButton } from "../icon-button/icon-button"
import { LinkIconButtonProps } from "./link-icon-button.props"
import { useNavigation } from "@react-navigation/native"

export function LinkIconButton(props: LinkIconButtonProps) {
  const { route, icon, ...rest } = props
  const navigation = useNavigation()

  return <IconButton icon={icon} onPress={() => navigation.navigate(route)} {...rest} />
}
