import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { IconButton } from "./icon-button"
import { Alert } from "react-native"

storiesOf("IconButton", module)
  .addDecorator((fn) => <StoryScreen>{fn() as React.ReactNode}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="add">
        <IconButton icon="back" onPress={() => Alert.alert("pressed")} />
      </UseCase>
    </Story>
  ))
