import * as React from "react"
import { View } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Card } from "./card"
import { Text } from "../text/text"

storiesOf("Card", module)
  .addDecorator((fn) => <StoryScreen>{fn() as React.ReactNode}</StoryScreen>)
  .add("Card", () => (
    <Story>
      <UseCase text="Card" usage="Card Component.">
        <Card>
          <View>
            <Text preset="mobile.body" text="Requested by: Production API Key" />
            <Text preset="mobile.h3" text="10 ETH" />
            <Text preset="mobile.body" text="From: 0xf5ee06baf412bea9eb..." />
          </View>
        </Card>
      </UseCase>
    </Story>
  ))
