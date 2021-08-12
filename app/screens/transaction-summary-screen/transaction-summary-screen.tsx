/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { Header, Icon, Text, Screen } from "../../components"
import { Button } from "../../components/button/button"
import { timing, palette, spacing, typography } from "../../theme"
import SummaryCard from "./summary-card"
import RNBootSplash from "react-native-bootsplash"
import CryptoAPIFetchService from "../../services/crypto-api-fetch-service/crypo-api-fetch-service"
import { useService } from "../../hooks/use-service.hook"
import { PrimaryParamList } from "../../navigators"
import { RouteProp } from "@react-navigation/core"
import en from "../../i18n/en.json"
import { useNavigation } from "../../hooks"

const styles = StyleSheet.create({
  approveBtn: {
    alignItems: "center",
    backgroundColor: "rgba(110, 180, 55, 0.97)",
    borderRadius: 4,
    display: "flex",
    elevation: 10,
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingVertical: 18,
    shadowColor: "rgb(0, 97, 224)",
  },
  buttonRow: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    fontFamily: typography.secondary,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  heading: {
    alignSelf: "center",
    color: palette.neutral.black,
    fontSize: 28,
    fontWeight: "bold",
  },
  icon: {
    alignSelf: "center",
    height: 30,
    width: 125,
  },
  logo: {
    flex: 0.2,
    marginVertical: spacing.small,
    position: "relative",
  },
  rejectBtn: {
    alignItems: "center",
    backgroundColor: "#F22D4E",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingVertical: 18,
  },
})
type TransactionSummaryScreenRouteProp = RouteProp<PrimaryParamList, "transactionsummaryscreen">
type TransactionSummaryScreenProps = { route: TransactionSummaryScreenRouteProp }

export const TransactionSummaryScreen = function TransactionSummaryScreen({
  route: {
    params: { transactionId },
  },
}: TransactionSummaryScreenProps) {
  const { navigate } = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide()
    }, timing.medium)
  }, [transactionId])

  const {
    hooks: { useShowTransactionRequestDetails },
  } = useService(CryptoAPIFetchService)

  const { fetch, loading, error, result } = useShowTransactionRequestDetails()

  useEffect(() => {
    fetch(transactionId)
  }, [transactionId])

  if (loading) {
    return (
      <View>
        <ActivityIndicator style={{ flex: 1, flexDirection: "column" }} size="large" color="#000" />
      </View>
    )
  }
  if (error) {
    throw error
  }
  return (
    <Screen style={styles.container}>
      <View style={styles.logo}>
        <Header title={<Icon style={styles.icon} icon={"logo"} />} />
      </View>
      <View style={{ flex: 0.1 }}>
        <Text
          text={en.transactionSummaryScreen.title}
          tx={"transactionSummaryScreen.title"}
          preset={"mobile.h2"}
          style={styles.heading}
        />
      </View>
      {result ? (
        <>
          <View style={{ flex: 0.7 }}>
            <SummaryCard transactionResponse={result} />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => navigate("transactionConfirm")}
              tx={"transactionSummaryScreen.approveButtonText"}
              style={styles.approveBtn}
            />
            <Button
              onPress={() => navigate("transactionConfirm")}
              tx={"transactionSummaryScreen.rejectButtonText"}
              style={styles.rejectBtn}
            />
          </View>
        </>
      ) : null}
    </Screen>
  )
}
