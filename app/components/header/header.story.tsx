import * as React from "react"
import { View } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Header } from "./header"
import { color } from "../../theme"
import { Icon } from "../icon/icon"

const VIEWSTYLE = {
  flex: 1,
  backgroundColor: color.transparent,
}

storiesOf("Header", module)
  .addDecorator((fn) => <StoryScreen>{fn() as React.ReactNode}</StoryScreen>)
  .add("Behavior", () => (
    <Story>
      <UseCase noPad text="default" usage="The default usage">
        <View style={VIEWSTYLE}>
          <Header title={<Icon icon={"logo"} />} />
        </View>
      </UseCase>
      <UseCase noPad text="leftIcon" usage="A left nav icon">
        <View style={VIEWSTYLE}>
          <Header title={<Icon icon={"logo"} />} />
        </View>
      </UseCase>
      <UseCase noPad text="rightIcon" usage="A right nav icon">
        <View style={VIEWSTYLE}>
          <Header title={<Icon icon={"logo"} />} />
        </View>
      </UseCase>
    </Story>
  ))
