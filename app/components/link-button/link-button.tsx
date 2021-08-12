import * as React from "react"
import { useNavigation } from "@react-navigation/native"
import { LinkButtonProps } from "./link-button.props"
import { Button } from "../button/button"

export function LinkButton(props: LinkButtonProps) {
  const { route, text, ...rest } = props
  const navigation = useNavigation()

  return <Button onPress={() => navigation.navigate(route)} text={text} {...rest} />
}
