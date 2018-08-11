import { COLOR_PRIMARY, COLOR_TEXT_INVERTED, COLOR_FACEBOOK } from "ui/quarks";

export const getButtonColors = modifier => {
  switch (modifier) {
    case "facebook":
      return {
        backgroundColor: COLOR_FACEBOOK,
        color: COLOR_TEXT_INVERTED
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: COLOR_PRIMARY,
        border: `1px solid ${COLOR_PRIMARY}`
      };
    case "primary":
      return {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_TEXT_INVERTED
      };
  }
};
