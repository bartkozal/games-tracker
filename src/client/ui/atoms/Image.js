// @flow
import styled from "react-emotion";

type Props = {
  width?: number,
  type?: "circle",
  fullWidth?: boolean
};

const Image = styled("img")(({ type, width, fullWidth }: Props) => ({
  width,
  borderRadius: type === "circle" ? "50%" : null,
  maxWidth: fullWidth ? "100%" : null
}));

export default Image;
