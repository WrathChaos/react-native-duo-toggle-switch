import React, { Component } from "react";
import { Text, Easing, Animated } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  container,
  buttonContainer,
  _textStyle,
} from "./DuoToggleSwitch.style";

interface Props {}

interface State {}

export default class DuoToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      animation: new Animated.Value(1),
    };
  }

  spring = () => {
    const { animation } = this.state;
    animation.setValue(0.98);
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
    }).start();
  };

  setActiveTabColor = (alignment) => {
    const { activeColor, inactiveColor } = this.props;
    const { activeTab } = this.state;

    if (!alignment) return activeTab === 0 ? inactiveColor : activeColor;
    return activeTab === 1 ? inactiveColor : activeColor;
  };

  render() {
    const {
      width,
      height,
      firstText,
      firstTextStyle,
      secondTextStyle,
      secondText,
      buttonWidth,
      buttonHeight,
      borderRadius,
      inactiveColor,
      onPressPrimary,
      backgroundColor,
      activeTextColor,
      inactiveTextColor,
      onPressSecondary,
    } = this.props;
    const { activeTab, animation } = this.state;

    return (
      <Animated.View
        style={[
          container(height, width, backgroundColor),
          { transform: [{ scale: animation }] },
        ]}
      >
        <Ripple
          disable
          onPress={() => {
            this.spring(this, Easing.bounce);
            this.setState({ activeTab: 0 });
            onPressPrimary && onPressPrimary();
          }}
          rippleColor={inactiveColor}
          rippleContainerBorderRadius={borderRadius}
          style={buttonContainer(
            buttonHeight,
            buttonWidth,
            this.setActiveTabColor(true),
            borderRadius,
            true,
          )}
        >
          <Text
            style={[
              _textStyle(activeTab === 1 ? inactiveTextColor : activeTextColor),
              firstTextStyle,
            ]}
          >
            {firstText}
          </Text>
        </Ripple>
        <Ripple
          rippleColor={inactiveColor}
          rippleContainerBorderRadius={50}
          onPress={() => {
            this.spring(this, Easing.bounce);
            this.setState({ activeTab: 1 });
            onPressSecondary && onPressSecondary();
          }}
          style={buttonContainer(
            buttonHeight,
            buttonWidth,
            this.setActiveTabColor(false),
            borderRadius,
            false,
          )}
        >
          <Text
            style={[
              _textStyle(activeTab === 0 ? inactiveTextColor : activeTextColor),
              secondTextStyle,
            ]}
          >
            {secondText}
          </Text>
        </Ripple>
      </Animated.View>
    );
  }
}

DuoToggleSwitch.defaultProps = {
  height: 35,
  width: "40%",
  buttonWidth: 85,
  borderRadius: 50,
  buttonHeight: 35,
  firstText: "Map",
  secondText: "List",
  shadowColor: "#000",
  activeColor: "#FBA928",
  backgroundColor: "#fff",
  inactiveColor: "#fff",
  activeTextColor: "#f1f1f1",
  inactiveTextColor: "#757575",
};
