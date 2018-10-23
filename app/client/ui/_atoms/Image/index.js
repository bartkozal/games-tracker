import styled from "react-emotion";

const Image = styled("img")(({ type, width, fullWidth, onClick }) => ({
  width,
  borderRadius: type === "circle" ? "50%" : null,
  maxWidth: fullWidth ? "100%" : null,
  cursor: onClick ? "pointer" : "inherit"
}));

export default Image;
