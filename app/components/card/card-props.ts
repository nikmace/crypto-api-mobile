import { ReactNode } from "react"
import { ViewProps } from "react-native"

export interface CardProps extends ViewProps {
  /**
   * The text to display if there isn't a tx.
   */
  children?: ReactNode
}
