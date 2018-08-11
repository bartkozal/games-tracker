import { COLOR_PRIMARY, COLOR_LIGHT, COLOR_FACEBOOK } from "ui/quarks";

export const getButtonColors = modifier => {
  switch (modifier) {
    case "primary":
      return {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_LIGHT
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: COLOR_PRIMARY,
        border: `1px solid ${COLOR_PRIMARY}`
      };
    case "facebook":
      return {
        backgroundColor: COLOR_FACEBOOK,
        color: COLOR_LIGHT
      };
  }
};
