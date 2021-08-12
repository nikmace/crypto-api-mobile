import React, { useEffect } from "react"
import { Screen, Header, Text, Icon, AutoImage } from "../../components"
import { View, StyleSheet } from "react-native"
import { spacing, palette, timing } from "../../theme"
import { PrimaryParamList } from "../../navigators"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

const styles = StyleSheet.create({
  headerView: {
    flex: 0.1,
    marginVertical: spacing.small,
    position: "relative",
  },
  icon: {
    alignSelf: "center",
    height: 30,
    width: 125,
  },
  image: {
    height: 100,
    width: 100,
  },
  imageView: {
    alignSelf: "center",
    flex: 0.6,
    justifyContent: "flex-start",
    position: "relative",
  },
  screen: {
    backgroundColor: palette.neutral.white,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.large + 16,
    justifyContent: "space-between",
  },
  title: {
    color: palette.neutral.darkGrey,
    textAlign: "center",
  },
  titleView: {
    flex: 0.2,
    position: "relative",
  },
})

type SuccessScreenNavigationProp = StackNavigationProp<PrimaryParamList, "successSplash">

type SuccessScreenRouteProp = RouteProp<PrimaryParamList, "successSplash">

export type SuccessScreenProps = {
  route: SuccessScreenRouteProp
  navigation: SuccessScreenNavigationProp
}

export const SuccessScreen = ({ navigation, route }: SuccessScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(route.params.screen)
    }, timing.large)
  }, [])

  return (
    <Screen style={styles.screen}>
      <View style={styles.headerView}>
        <Header title={<Icon style={styles.icon} icon={"logo"} />} />
      </View>
      <View style={styles.titleView}>
        <Text tx={"successScreen.title"} preset={"mobile.h2"} style={styles.title} />
      </View>
      <View style={styles.imageView}>
        <AutoImage style={styles.image} source={require("./Success.png")} />
      </View>
    </Screen>
  )
}
export default SuccessScreen
