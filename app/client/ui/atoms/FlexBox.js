import styled from "react-emotion";

export const Flex = styled("div")(
  {
    display: "flex"
  },
  ({ wrap, alignItems, justifyContent, direction }) => ({
    flexDirection: direction,
    flexWrap: wrap,
    alignItems,
    justifyContent
  })
);

export const Box = styled("div")(({ size, grow }) => ({
  flexBasis: size,
  flexGrow: grow
}));
