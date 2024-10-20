# React Native

## React.js
- It is a javascript library for building user interfaces.
- Typically used for web development.
- But it's actually React DOM that adds web support.
- **React itself is platform-agnostic.**
<br>

## React Native
- A collection of special React components.
- Components are compiled to native UI elements.
- React Native also exposes native platform APIs like using the device camera, so that you can use such features in your javascript code even though you need to tap into native device APIs for that.
- **React Native is like React DOM:** It connects React to a specific platform.
<br>

>#### By using ReactJS and React Native, you can build real native mobile apps.
<br>

## How does React Native works?
- React Native maps (and compiles) re-usable components to respective platform equivalents.
- For example: 
    | React Native JSX | Native Component (android) | Native Component (ios) |
    | ---------------- | -------------------------- | ---------------------- |
    |       <View>     |         android.View       |          UIView        |

<br>

- **UI elements are components exposed by React Native which are compiled to native views.**
- **Whereas the logic which is written by us in javascript is not compiled but running on a javascript thread hosted by React Native (in the app).**
<br>

## Creating a new React Native Project
- Run the command
`npx create-expo-app --template blank ProjectName`

- `--template blank` will ensure that we have a very basic project setup which we can use to really start from scratch and learn about all the key features step by step.

- If you don't use `--template blank` then you will get a more complex starting project which uses TypeScript by default.
<br>

## React Core Components
- Core Components are built into React Native.
- Translation to native UI widgets is provided by React Native.
- **For example:**
    - `<View/>`
    - `<Text/>`
    - `<Button/>`
    - `<TextInput/>`
    - `<Image/>`
<br>

## Styling React Native Apps
- There is no CSS.
- You can either use Inline styles or `Stylesheet` objects.
