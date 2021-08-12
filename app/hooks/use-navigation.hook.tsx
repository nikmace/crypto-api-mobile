import { useNavigation as _useNavigation, NavigationProp } from "@react-navigation/native"
import { PrimaryParamList } from "../navigators"

type PrimaryNavigationProp = NavigationProp<PrimaryParamList>

export const useNavigation = () => {
  return _useNavigation<PrimaryNavigationProp>()
}
