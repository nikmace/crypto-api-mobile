import { useNavigation } from "@react-navigation/core"
import { PrimaryParamList } from "../navigators"

export const useSuccessSplashScreen = () => {
  const navigation = useNavigation()
  return (screenName: keyof PrimaryParamList) => {
    navigation.navigate("successSplash", { screen: screenName })
  }
}
