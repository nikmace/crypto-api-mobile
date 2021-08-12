import { TouchableOpacityProps } from "react-native"
import { IconProps } from "../icon/icon.props"

export interface IconButtonProps extends Omit<TouchableOpacityProps, "style">, IconProps {}
