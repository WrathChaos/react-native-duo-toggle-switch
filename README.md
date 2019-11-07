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

# Installation

Add the dependency:

```ruby
npm i react-native-duo-toggle-switch
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-androw": ">= 0.0.34",
"react-native-material-ripple": ">= 0.9.1"
```

# Usage

## Import

```js
import DuoToggleSwitch from "react-native-duo-toggle-switch";
```

## Basic Usage

```js
<DuoToggleSwitch />
```

# Configuration - Props

| Property          |  Type  | Default | Description                                                         |
| ----------------- | :----: | :-----: | ------------------------------------------------------------------- |
| width             | number | string  | 40%                                                                 | change the width however, you need to change the with of the each button as well!                |
| height            | number | string  | 35                                                                  | change the height however, you need to change the height of the each button as well!             |
| buttonWidth       | number | string  | 85                                                                  | change the width of the button however, you need to change the width of the container as well!   |
| buttonHeight      | number | string  | 35                                                                  | change the height of the button however, you need to change the height of the container as well! |
| borderRadius      | number |   50    | change the border radius                                            |
| firstText         | string |   Map   | set the first button's (left one) text                              |
| secondText        | string |  List   | set the second button's (right one) text                            |
| activeColor       | string | #FBA928 | change the button's background color when it is active or pressed   |
| inactiveColor     | string |  #fff   | change the button's background color when it is inactive or pressed |
| activeTextColor   | string | #f1f1f1 | change the button's text color when it is active or pressed         |
| inactiveTextColor | string | #757575 | change the button's text color when it is active or pressed         |
| backgroundColor   | string |  #fff   | change the whole background color                                   |
| shadowColor       | string |  #000   | change the shadow color                                             |
| shadowStyle       | style  | default | set your own shadow style for the toggle switch                     |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Color Change Animation
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Duo Toggle Switch is available under the MIT license. See the LICENSE file for more info.
