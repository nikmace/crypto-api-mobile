import React from "react"
import { useService } from "../../hooks/use-service.hook"
import CryptoAPIFetchService from "../../services/crypto-api-fetch-service/crypo-api-fetch-service"
import { View, StyleSheet, ScrollView } from "react-native"
import {
  Header,
  Icon,
  Screen,
  Text,
  Wallpaper,
  BulletItem,
  Button,
  IconButton,
} from "../../components"
import { palette, spacing } from "../../theme"
import { Card } from "../../components/card/card"
import { useNavigation } from "@react-navigation/native"

export const TransactionScreen = () => {
  const {
    hooks: { useListAwaitingApprovalTransactions },
  } = useService(CryptoAPIFetchService)
  const { fetch, result } = useListAwaitingApprovalTransactions()
  const navigation = useNavigation()

  return (
    <Screen style={styles.screenOutter}>
      <ScrollView>
        <View style={styles.headerView}>
          <Header
            onLeftPress={() => fetch({})}
            style={styles.header}
            leftIcon={"refresh"}
            title={<Icon style={styles.icon} icon={"logo"} />}
          />
        </View>

        {!result ? (
          <Screen style={styles.screenInner}>
            <View style={styles.titleView}>
              <Text tx={"transactionScreen.title"} preset={"mobile.h2"} style={styles.title} />
            </View>

            <View style={styles.imageView}>
              <Wallpaper style={styles.image} backgroundImage={require("./Artwork.png")} />
            </View>

            <View style={styles.paragraphView}>
              <Text tx={"transactionScreen.text"} preset={"mobile.h3"} style={styles.text}></Text>
            </View>
          </Screen>
        ) : (
          <Screen style={styles.screenInner}>
            <View style={styles.titleView}>
              <Text tx={"transactionScreen.title"} preset={"mobile.h2"} style={styles.title} />
            </View>
            {result.data.items.map((item) => {
              return (
                <Card key={`Key:${item.id}`} style={styles.cardSpacing}>
                  <Text tx={"transactionScreen.requested"} preset={"mobile.body"}></Text>

                  <View style={styles.cryptoRow}>
                    <Text preset={"mobile.h3"} style={styles.cryptoValue}>
                      {item.amount} {item.blockchain}{" "}
                    </Text>
                    <Text preset={"elements.tiny"}>≈ No data</Text>
                  </View>

                  <View style={styles.verticalSpace}>
                    <Text tx={"transactionScreen.from"} preset={"mobile.body"}></Text>
                    <View style={styles.docIcon}>
                      <IconButton icon={"documents"}></IconButton>
                    </View>
                  </View>

                  <Text tx={"transactionScreen.to"} preset={"mobile.body"} />

                  <View style={styles.row}>
                    <Text preset={"mobile.bodyLeading"}>{item.walletName}</Text>
                    <View style={styles.docIcon}>
                      <IconButton icon={"documents"}></IconButton>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <BulletItem icon={"successCheck"} text={"Approved by 3/4 members"} />
                    <Button
                      onPress={() => {
                        navigation.navigate("transactionsummaryscreen", { transactionId: "1" })
                      }}
                      style={styles.btn}
                    >
                      <Icon icon={"rightArrow"} />
                    </Button>
                  </View>
                </Card>
              )
            })}
          </Screen>
        )}
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingRight: 0,
  },
  cardSpacing: {
    marginVertical: 20,
  },
  cryptoRow: {
    alignItems: "center",
    flexDirection: "row",
  },

  cryptoValue: {
    color: palette.neutral.black,
    fontWeight: "bold",
  },
  docIcon: {
    marginRight: 15,
  },

  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: spacing.huge,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  headerView: {
    flex: 0.15,
    position: "relative",
  },
  icon: {
    alignSelf: "center",
    height: 30,
    marginRight: spacing.large + 2,
    width: 125,
  },
  image: {
    height: 210,
    position: "relative",
    width: 210,
  },
  imageView: {
    alignSelf: "center",
    flex: 0.4,
    justifyContent: "flex-start",
    position: "relative",
  },
  paragraphView: {
    alignSelf: "center",
    flex: 0.3,
    marginHorizontal: spacing.medium,
    position: "relative",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  screenInner: {
    backgroundColor: palette.neutral.white,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: spacing.large,
    justifyContent: "space-between",
  },
  screenOutter: {
    backgroundColor: palette.neutral.white,
    marginTop: spacing.small,
    marginVertical: spacing.large,
  },
  text: {
    color: palette.neutral.darkGrey,
    textAlign: "center",
  },
  title: {
    color: palette.neutral.black,
    fontWeight: "bold",
    paddingBottom: spacing.large,
    textAlign: "center",
  },

  titleView: {
    position: "relative",
  },

  verticalSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "100%",
  },
})
