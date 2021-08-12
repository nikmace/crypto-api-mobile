import * as React from "react"
import { PinCodeInput } from "./pin-code-input"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"

const PinCodeInputStory = () => {
  const [PIN, setPIN] = React.useState("")

  return <PinCodeInput value={PIN} onChange={setPIN} />
}

storiesOf("PIN Input", module)
  .addDecorator((fn) => <StoryScreen>{fn() as React.ReactNode}</StoryScreen>)
  .add("PIN Presets", () => {
    return (
      <Story>
        <UseCase text="PIN" usage="Input PIN">
          <PinCodeInputStory />
        </UseCase>
      </Story>
    )
  })
