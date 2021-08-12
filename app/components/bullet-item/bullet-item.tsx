import React from "react"
import { View, StyleSheet } from "react-native"
import { Text } from ".."
import { Icon } from "../icon/icon"
import { IconTypes } from "../icon/icons"
type BulletItemProps = {
  text: string
  icon: IconTypes
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
    minHeight: 22,
  },
  icon: {
    flexGrow: 0,
    marginRight: 8,
    textAlign: "center",
  },
})

export function BulletItem({ text, icon }: BulletItemProps) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} icon={icon}></Icon>
      <Text preset="mobile.body">{text}</Text>
    </View>
  )
}

export default BulletItem
