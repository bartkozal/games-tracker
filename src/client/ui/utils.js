// @flow

type Size = number | "auto";

export const paddingVertical = (size: Size) => ({
  paddingTop: size,
  paddingBottom: size
});

export const paddingHorizontal = (size: Size) => ({
  paddingRight: size,
  paddingLeft: size
});

export const marginVertical = (size: Size) => ({
  marginTop: size,
  marginBottom: size
});

export const marginHorizontal = (size: Size) => ({
  marginRight: size,
  marginLeft: size
});
