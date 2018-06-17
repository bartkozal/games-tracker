import styled from "react-emotion";

const Image = styled("img")(({ type, width }) => ({
  width,
  borderRadius: type === "circle" ? "50%" : null
}));

export default Image;
