import React, { useEffect } from "react"
import { View, Image, StyleSheet } from "react-native"
import RNBootSplash from "react-native-bootsplash"
import { Header, LinkButton, Icon, Text, Screen } from "../../components"
import { timing, palette, spacing } from "../../theme"

export const OnboardingScreen = function OnboardingScreen() {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide()
    }, timing.medium)
  }, [])

  const styles = StyleSheet.create({
    button: {
      backgroundColor: palette.neutral.black,
    },
    buttonView: {
      alignSelf: "center",
      flex: 0.1,
      justifyContent: "flex-end",
      position: "relative",
      width: "100%",
    },
    header: {
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
      height: 125,
      width: 125,
    },
    imageView: {
      alignSelf: "center",
      flex: 0.4,
      justifyContent: "flex-start",
      position: "relative",
    },
    paragraphView: {
      alignSelf: "center",
      flex: 0.2,
      marginHorizontal: spacing.small,
      position: "relative",
    },
    screen: {
      backgroundColor: palette.neutral.white,
      flex: 1,
      flexDirection: "column",
      paddingHorizontal: 24,
      paddingVertical: 40,
      justifyContent: "space-between",
    },
    text: {
      color: palette.neutral.black,
      textAlign: "center",
    },
    titleView: {
      flex: 0.1,
      position: "relative",
    },
  })

  return (
    <Screen style={styles.screen}>
      <View style={styles.header}>
        <Header title={<Icon style={styles.icon} icon={"logo"} />} />
      </View>

      <View style={styles.titleView}>
        <Text tx={"onboardingScreen.title"} preset={"mobile.h2"} style={styles.text} />
      </View>

      <View style={styles.paragraphView}>
        <Text tx={"onboardingScreen.textScanQR"} preset={"content.body"} style={styles.text}></Text>
      </View>

      <View style={styles.imageView}>
        <Image style={styles.image} source={require("../../../assets/images/QRImage.png")} />
      </View>

      <View style={styles.buttonView}>
        <LinkButton
          route={"onboardingQRCodeScanner"}
          tx={"onboardingScreen.buttonText"}
          style={styles.button}
        />
      </View>
    </Screen>
  )
}
