// @flow
import styled from "react-emotion";

type Props = {
  width?: number,
  type?: "circle"
};

const Image = styled("img")(({ type, width }: Props) => ({
  width,
  borderRadius: type === "circle" ? "50%" : null
}));

export default Image;
