/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from "react"
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { palette } from "../../theme"
import { Text, Icon, BulletItem } from "../../components"
import { Card } from "../../components/card/card"
import { InlineResponse2002DataItems } from "../../../__generated__/api-client"
import { translate } from "../../i18n"
const styles = StyleSheet.create({
  blackText: {
    color: palette.neutral.black,
  },
  boldText: {
    color: palette.neutral.black,
    fontSize: 21,
    fontWeight: "bold",
    lineHeight: 25,
  },
  bulletItemComponent: {
    marginVertical: 30,
  },
  card: {
    flex: 0.85,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  container: {
    width: "100%",
  },
  fromText: {
    color: palette.neutral.grey,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallText: {
    color: palette.neutral.black,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.6,
  },
  text: {
    color: palette.neutral.grey,
    marginVertical: 3,
  },
  textRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  wallet: {
    fontSize: 19,
    fontWeight: "bold",
  },
})

type SumamryCardProps = {
  transactionResponse: InlineResponse2002DataItems
}

const SummaryCard = ({ transactionResponse }: SumamryCardProps) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text preset="mobile.body" style={styles.text}>
              {translate("transactionSummaryScreen.requestedBy")} "no data"
            </Text>
            <View style={styles.textRow}>
              <Text preset={"mobile.h3"} style={styles.boldText}>
                {transactionResponse.amount} {transactionResponse.blockchain}{" "}
              </Text>
              <Text preset={"elements.tiny"} style={styles.smallText}>
                ≈ $ "no data"
              </Text>
            </View>
            <View style={styles.fromText}>
              <Text preset={"mobile.body"} style={styles.text}>
                {translate("transactionSummaryScreen.from")} "no data"
              </Text>
              <Icon icon={"documents"} />
            </View>
            <View>
              <Text preset={"mobile.body"} style={styles.text}>
                {translate("transactionSummaryScreen.to")} "no data".
              </Text>
              <View style={styles.row}>
                <Text preset={"mobile.body"} style={styles.wallet}>
                  {transactionResponse.walletName}
                </Text>
                <Icon icon={"documents"} />
              </View>
              <View style={styles.bulletItemComponent}>
                <BulletItem text={"Approved by Paul M."} icon={"successCheck"} />
              </View>
              <View style={styles.textRow}>
                <Text preset={"elements.tiny"} style={styles.blackText}>
                  {translate("transactionSummaryScreen.fee")} "no data"{" "}
                </Text>
                <Text preset={"elements.tiny"} style={styles.smallText}>
                  ≈ "no data"
                </Text>
              </View>
              <View style={styles.textRow}>
                <Text preset={"elements.tiny"} style={styles.blackText}>
                  "no data"{" "}
                </Text>
                <Text preset={"elements.tiny"} style={styles.smallText}>
                  ≈ "no data"
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </Card>
  )
}

export default SummaryCard
