import styled from "react-emotion";

const Image = styled("img")(({ type, width, fullWidth }) => ({
  width,
  borderRadius: type === "circle" ? "50%" : null,
  maxWidth: fullWidth ? "100%" : null
}));

export default Image;
