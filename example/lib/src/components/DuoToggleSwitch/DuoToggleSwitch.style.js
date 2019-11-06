export const container = (height, width, backgroundColor) => ({
  height,
  width,
  margin: 16,
  backgroundColor,
  borderRadius: 32,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-evenly"
});

export const buttonContainer = (
  height,
  width,
  backgroundColor,
  borderRadius,
  alignment
) => ({
  width,
  height,
  backgroundColor,
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: alignment ? borderRadius : 0,
  borderBottomLeftRadius: alignment ? borderRadius : 0,
  borderTopRightRadius: alignment ? 0 : borderRadius,
  borderBottomRightRadius: alignment ? 0 : borderRadius
});

export const _textStyle = color => ({
  color,
  fontWeight: "bold"
});

export const _shadowStyle = shadowColor => ({
  shadowColor,
  shadowOffset: {
    width: 0,
    height: 5
  },
  shadowOpacity: 0.05,
  shadowRadius: 7
});

export default {};
