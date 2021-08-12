import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.textPrimary,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,

  "content.body": {
    ...BASE,
    fontFamily: typography.secondary,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    color: color.dim,
  } as TextStyle,

  "elements.small": {
    ...BASE,
    fontFamily: typography.secondary,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    color: color.dim,
  } as TextStyle,

  "elements.medium": {
    ...BASE,
    fontFamily: typography.secondary,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    color: color.dim,
  } as TextStyle,

  "elements.tiny": {
    ...BASE,
    fontFamily: typography.secondary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    color: color.dim,
  } as TextStyle,

  "mobile.h2": {
    ...BASE,
    fontFamily: typography.primary,
    fontSize: 28,
    lineHeight: 34,
    color: color.dim,
  } as TextStyle,

  "mobile.h3": {
    ...BASE,
    fontFamily: typography.primary,
    fontSize: 21,
    lineHeight: 25,
    color: color.dim,
  } as TextStyle,

  "mobile.bodyLeading": {
    ...BASE,
    fontFamily: typography.primary,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    color: color.textPrimary,
  } as TextStyle,

  "mobile.body": {
    ...BASE,
    fontFamily: typography.secondary,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "normal",
    fontStyle: "normal",
    color: color.textPrimary,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
