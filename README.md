# Welcome to your new Crypto API Mobile app!

Currently includes:

- React Native
- React Navigation
- TypeScript
- And more!

## Images from the application

![IMG_4429](https://user-images.githubusercontent.com/39880364/129169656-0ac43748-8d4e-4ca6-8f2d-c915c088eece.PNG)
![IMG_4427](https://user-images.githubusercontent.com/39880364/129169666-0e419d22-1eb1-4058-b34c-1fb57fcb2b01.PNG)
![IMG_4426](https://user-images.githubusercontent.com/39880364/129169697-39377dc4-cfe3-4d85-93a3-465b57617182.PNG)

## Including environment variables

Before you run the application, add an environment file in app/config/env.js with the value from the app/config/env.js.example file.

## Running the application

Follow the link https://reactnative.dev/docs/environment-setup and make sure you switch to "React Native CLI Quickstart", then choose your "Development OS" and "Target OS" and follow the instructions step by step very carefully. This project uses Node 14 version. When you are done with setting up the "Development environment". It is recommended to install Yarn through the "NPM" package manager, which comes bundled with Node.js when you install it on your system. To install Yarn, you have to open your "Terminal" and run "npm install --global yarn".When you have installed Yarn successfully, you have to start "Metro", run "yarn start" inside your React Native project folder. In order to run it on your mobile device you should type "yarn android". If you are using the "macOS" system, run the "yarn ios", this command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device make sure you follow this link "https://reactnative.dev/docs/running-on-device".

## TURN OFF DEVELOPMENT MODE FOR ANDROID

If you are running the application on Android, you must turn off development mode, since it is causing more issues than it solves.

## Quick Start

The project's structure will look similar to this:

```
Crypto-API-Mobile-App
├── android
│   ├── app
│   ├── build
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── java_pid162291.hprof
│   ├── java_pid5155.hprof
│   ├── sentry.properties
│   └── settings.gradle
├── api-specs
│   ├── index.json
│   └── index.yaml
├── app
│   ├── app.tsx
│   ├── components
│   ├── config
│   ├── constants
│   ├── contexts
│   ├── hooks
│   ├── i18n
│   ├── navigators
│   ├── screens
│   ├── sentry
│   ├── services
│   ├── theme
│   ├── types
│   └── utils
├── app.json
├── assets
│   ├── fonts
│   └── images
├── babel.config.js
├── bin
│   ├── ci-before-script
│   ├── postInstall
│   └── setup
├── e2e
│   ├── config.json
│   ├── firstTest.spec.js
│   ├── init.js
│   ├── README.md
│   └── reload.js
├── __generated__
│   └── api-client
├── ignite
│   └── templates
├── index.js
├── ios
│   ├── assets
│   ├── CryptoAPIMobileApp
│   ├── CryptoAPIMobileAppTests
│   ├── CryptoAPIMobileApp.xcodeproj
│   ├── CryptoAPIMobileApp.xcworkspace
│   ├── main.jsbundle
│   ├── Podfile
│   ├── Podfile.lock
│   └── sentry.properties
├── metro.config.js
├── node_modules
├── openapitools.json
├── package.json
├── react-native.config.js
├── README.md
├── storybook
│   ├── index.ts
│   ├── storybook-registry.ts
│   ├── storybook.tsx
│   ├── toggle-storybook.tsx
│   ├── toggle-storybook.web.tsx
│   └── views
├── test
│   ├── i18n.test.ts
│   ├── mock-async-storage.ts
│   ├── mock-file.ts
│   ├── mock-i18n.ts
│   ├── mock-react-native-image.ts
│   ├── mock-reactotron.ts
│   ├── setup.ts
│   ├── __snapshots__
│   └── storyshots.test.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock

```

### ./app directory

This is a directory you would normally have to create when using vanilla React Native.

The inside of the src directory looks similar to the following:

```
app
├── app.tsx
├── components
├── config
├── constants
├── contexts
├── hooks
├── i18n
├── navigators
├── screens
├── sentry
├── services
├── theme
├── types
└── utils
```

**components**
This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**hooks**
THis is where your **commonly** used hooks should be placed.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**sentry**
This is where our Sentry related code will reside.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./ignite directory

WORK IN PROGRESS, DO NOT USE
The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find generators, plugins and examples to help you get started with React Native.

### ./storybook directory

This is where your stories will be registered and where the Storybook configs will live.

### ./test directory

This directory will hold your Jest configs and mocks, as well as your [storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) test file. This is a file that contains the snapshots of all your component storybooks.

## Running Storybook

From the command line in your generated app's root directory, enter `yarn run storybook`
This starts up the storybook server and opens a story navigator in your browser. With your app
running, choose Toggle Storybook from the developer menu to switch to Storybook; you can then
use the story navigator in your browser to change stories.

For Visual Studio Code users, there is a handy extension that makes it easy to load Storybook use cases into a running emulator via tapping on items in the editor sidebar. Install the `React Native Storybook` extension by `Orta`, hit `cmd + shift + P` and select "Reconnect Storybook to VSCode". Expand the STORYBOOK section in the sidebar to see all use cases for components that have `.story.tsx` files in their directories.

## Running e2e tests

Read [e2e setup instructions](./e2e/README.md).
