import styled from "react-emotion";

const $Box = styled("div")(({ size, grow }) => ({
  flexBasis: size,
  flexGrow: grow
}));

export default $Box;
