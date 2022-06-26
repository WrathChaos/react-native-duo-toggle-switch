import * as React from "react";
import {
  Text,
  Animated,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, { _buttonContainer, _textStyle } from "./DuoToggleSwitch.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface DuoToggleSwitchProps {
  style?: CustomStyleProp;
  primaryButtonStyle?: CustomStyleProp;
  secondaryButtonStyle?: CustomStyleProp;
  primaryTextStyle?: CustomTextStyleProp;
  secondaryTextStyle?: CustomTextStyleProp;
  primaryText: string;
  secondaryText: string;
  activeColor?: string;
  inactiveColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  TouchableComponent?: any;
  onPrimaryPress: () => void;
  onSecondaryPress: () => void;
}

const DuoToggleSwitch: React.FC<DuoToggleSwitchProps> = ({
  style,
  activeColor = "#FBA928",
  inactiveColor = "#fff",
  primaryTextStyle,
  secondaryTextStyle,
  activeTextColor = "#f1f1f1",
  inactiveTextColor = "#757575",
  primaryText,
  secondaryButtonStyle,
  secondaryText,
  primaryButtonStyle,
  TouchableComponent = TouchableOpacity,
  onPrimaryPress,
  onSecondaryPress,
  ...rest
}) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [animation, setAnimation] = React.useState<Animated.Value>(
    new Animated.Value(1),
  );

  const primaryTextColor =
    activeTab === 1 ? inactiveTextColor : activeTextColor;

  const springAnimation = () => {
    animation.setValue(0.98);
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const setActiveTabColor = (alignment: boolean) => {
    if (!alignment) return activeTab === 0 ? inactiveColor : activeColor;
    return activeTab === 1 ? inactiveColor : activeColor;
  };

  const handlePrimaryPress = () => {
    springAnimation();
    setActiveTab(0);
    onPrimaryPress && onPrimaryPress();
  };

  const handleSecondaryPress = () => {
    springAnimation();
    setActiveTab(1);
    onSecondaryPress && onSecondaryPress();
  };

  return (
    <Animated.View
      style={[styles.container, style, { transform: [{ scale: animation }] }]}
    >
      <TouchableComponent
        style={[_buttonContainer(setActiveTabColor(true), true), primaryButtonStyle]}
        onPress={handlePrimaryPress}
        {...rest}
      >
        <Text style={[_textStyle(primaryTextColor), primaryTextStyle]}>
          {primaryText}
        </Text>
      </TouchableComponent>
      <TouchableComponent
        onPress={handleSecondaryPress}
        style={[_buttonContainer(setActiveTabColor(false), false), secondaryButtonStyle]}
        {...rest}
      >
        <Text
          style={[
            _textStyle(activeTab === 0 ? inactiveTextColor : activeTextColor),
            secondaryTextStyle,
          ]}
        >
          {secondaryText}
        </Text>
      </TouchableComponent>
    </Animated.View>
  );
};

export default DuoToggleSwitch;
