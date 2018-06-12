import styled from "react-emotion";

export const Flex = styled("div")(
  {
    display: "flex"
  },
  ({ wrap, alignItems, justifyContent, direction, fullHeight }) => ({
    flexDirection: direction,
    flexWrap: wrap,
    alignItems,
    justifyContent,
    minHeight: fullHeight ? "100vh" : null
  })
);

export const Box = styled("div")(({ size, grow }) => ({
  flexBasis: size,
  flexGrow: grow
}));
