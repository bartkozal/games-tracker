import {
  COLOR_PRIMARY,
  COLOR_LIGHT,
  FONT_SMALL,
  SPACING_SMALL,
  SPACING_BASE
} from "ui/quarks";

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
  }
};

export const getButtonSize = size => {
  switch (size) {
    case "block":
      return {
        width: "100%",
        justifyContent: "center"
      };
    case "small":
      return {
        ...FONT_SMALL,
        width: SPACING_BASE * 3,
        paddingTop: SPACING_SMALL / 2,
        paddingBottom: SPACING_SMALL / 2,
        paddingLeft: 0,
        paddingRight: 0,
        justifyContent: "center",
        textTransform: "uppercase"
      };
  }
};
