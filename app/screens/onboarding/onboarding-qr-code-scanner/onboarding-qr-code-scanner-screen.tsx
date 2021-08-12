import React from "react"
import { RNCamera } from "react-native-camera"
import { View, StyleSheet, Image } from "react-native"
import { LinkIconButton, Text } from "../../../components"
import { palette } from "../../../theme/palette"
import { useNavigation } from "@react-navigation/core"

export const OnboardingQRCodeScanner = function OnboardingQRCodeScanner() {
  const { navigate } = useNavigation()

  const handleBarcodeScannerScan = () => {
    navigate("registerPinCode")
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.linkButtonView}>
          <LinkIconButton route="onboarding" icon="xMark" />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{ color: palette.neutral.white }}
            tx={"onboardingQRCodeScanner.topBarText"}
          />
        </View>
      </View>

      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
        onBarCodeRead={handleBarcodeScannerScan}
      >
        <Image style={styles.qrCodeBorder} source={require("./Overlay.png")} />
      </RNCamera>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: palette.neutral.darkerGrey,
  },

  linkButtonView: {
    flex: 0.1,
  },

  preview: {
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    justifyContent: "center",
    maxHeight: "90%",
    overflow: "hidden",
  },
  qrCodeBorder: {
    alignSelf: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    width: "100%",
  },
  textContainer: {
    flex: 0.6,
  },
  topBar: {
    alignItems: "center",
    backgroundColor: palette.neutral.darkerGrey,
    flexDirection: "row",
    height: "15%",
    justifyContent: "space-evenly",
    width: "100%",
  },
})
