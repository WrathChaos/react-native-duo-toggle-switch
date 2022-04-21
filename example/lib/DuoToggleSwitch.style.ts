export const _buttonContainer = (
  backgroundColor: string,
  alignment: boolean,
) => ({
  width: 85,
  height: 35,
  backgroundColor,
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: alignment ? 50 : 0,
  borderBottomLeftRadius: alignment ? 50 : 0,
  borderTopRightRadius: alignment ? 0 : 50,
  borderBottomRightRadius: alignment ? 0 : 50,
});

export const _textStyle = (color: string): TextStyle => ({
  color,
  fontWeight: "bold",
});

import { ViewStyle, StyleSheet, TextStyle } from "react-native";

export default StyleSheet.create({
  container: {
    width: "40%",
    height: 35,
    margin: 16,
    borderRadius: 32,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
});
