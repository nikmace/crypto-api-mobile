import * as React from "react"
import { ViewStyle, TextStyle, Alert } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Button } from "./button"
import { spacing } from "../../theme/spacing"

const buttonStyleArray: ViewStyle[] = [
  { display: "flex" },
  { flexDirection: "row" },
  { justifyContent: "space-between" },
  { alignItems: "center" },
  { padding: spacing.large - 6 },
  { backgroundColor: "black" },
  { borderRadius: 4 },
]

const buttonTextStyleArray: TextStyle[] = []

storiesOf("Button", module)
  .addDecorator((fn) => <StoryScreen>{fn() as React.ReactNode}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Approve" usage="The Approve button.">
        <Button
          text="Approve"
          onPress={() => Alert.alert("pressed")}
          style={buttonStyleArray}
          textStyle={buttonTextStyleArray}
        />
      </UseCase>

      <UseCase text="Reject" usage="The Reject button.">
        <Button
          text="Reject"
          onPress={() => Alert.alert("pressed")}
          style={buttonStyleArray}
          textStyle={buttonTextStyleArray}
        />
      </UseCase>

      <UseCase text="Array Style" usage="Button with array style">
        <Button
          text="Approve"
          onPress={() => Alert.alert("pressed")}
          style={buttonStyleArray}
          textStyle={buttonTextStyleArray}
        />
      </UseCase>
    </Story>
  ))
