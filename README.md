<img alt="React Native Duo Toggle Switch" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-duo-toggle-switch)

[![Fully customizable animated duo toggle switch for React Native](https://img.shields.io/badge/-Fully%20customizable%20animated%20duo%20toggle%20switch%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-duo-toggle-switch)

[![npm version](https://img.shields.io/npm/v/react-native-duo-toggle-switch.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-duo-toggle-switch)
[![npm](https://img.shields.io/npm/dt/react-native-duo-toggle-switch.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-duo-toggle-switch)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Duo Toggle Switch"
        src="assets/Screenshots/example.gif" />
</p>

# Version 1 🥰

Version 1 is released with typescript and some breaking changes

- Code Cleaning
- Typescript
- Better props
- Fully customizable
- Better animations
- Better GIFs on documentation

# Installation

Add the dependency:

```ruby
npm i react-native-duo-toggle-switch
```

## Peer Dependencies

###### IMPORTANT! You need install them

<b><i>Zero Dependency</i></b>

# Usage

## Import

```js
import DuoToggleSwitch from "react-native-duo-toggle-switch";
```

## Basic Usage

```jsx
<DuoToggleSwitch
  primaryText="Map"
  secondaryText="List"
  onPrimaryPress={() => {}}
  onSecondaryPress={() => {}}
/>
```

## Custom Usage

```jsx
<DuoToggleSwitch
  primaryText="Map"
  secondaryText="List"
  onPrimaryPress={() => {}}
  onSecondaryPress={() => {}}
  TouchableComponent={Ripple}
  rippleColor="#fff"
  rippleContainerBorderRadius={50}
/>
```

# Configuration - Props

TouchableComponent?: any;

| Property             |   Type    |     Default      | Description                                                         |
| -------------------- | :-------: | :--------------: | ------------------------------------------------------------------- |
| primaryText          |  string   |    undefined     | set the primary button's (left one) text                            |
| secondyText          |  string   |    undefined     | set the secondy button's (right one) text                           |
| activeColor          |  string   |     #FBA928      | change the button's background color when it is active or pressed   |
| inactiveColor        |  string   |       #fff       | change the button's background color when it is inactive or pressed |
| activeTextColor      |  string   |     #f1f1f1      | change the button's text color when it is active or pressed         |
| inactiveTextColor    |  string   |     #757575      | change the button's text color when it is active or pressed         |
| onPrimaryPress       | function  |       null       | set your own onPress logic for `first(primary) button`              |
| onSecondaryPress     | function  |       null       | set your own onPress logic for `second(secondary) button`           |
| style                | ViewStyle |     default      | set or override style for the `main container`                      |
| primaryButtonStyle   | ViewStyle |     default      | set or override style for the `primary button`                      |
| secondaryButtonStyle | ViewStyle |     default      | set or override style for the `secondary button`                    |
| primaryTextStyle     | TextView  |     default      | set or override style for `primary text style`                      |
| secondaryTextStyle   | TextView  |     default      | set or override style for `secondary text style`                    |
| TouchableComponent   | component | TouchableOpacity | set your own Pressable functionality instead of `TouchableOpacity`  |

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Typescript~~
- [ ] Color Change Animation
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Duo Toggle Switch is available under the MIT license. See the LICENSE file for more info.
