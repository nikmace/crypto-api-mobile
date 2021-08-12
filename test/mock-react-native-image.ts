import * as ReactNative from "react-native"
import mockFile from "./mock-file"

jest.doMock("react-native", () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      Image: {
        ...ReactNative.Image,
        resolveAssetSource: jest.fn(() => mockFile), // eslint-disable-line @typescript-eslint/no-unused-vars
        getSize: jest.fn((_, success: (width: number, height: number) => void) =>
          success(100, 100),
        ),
      },
    },
    ReactNative,
  )
})
