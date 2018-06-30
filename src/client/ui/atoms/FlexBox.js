// @flow
import styled from "react-emotion";

type FlexProps = {
  wrap: "nowrap" | "wrap",
  alignItems: "flex-start" | "center" | "flex-end",
  justifyContent:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around",
  direction: "row" | "column" | "row-reverse" | "column-reverse"
};

export const Flex = styled("div")(
  {
    display: "flex"
  },
  ({ wrap, alignItems, justifyContent, direction }: FlexProps) => ({
    flexDirection: direction,
    flexWrap: wrap,
    alignItems,
    justifyContent
  })
);

type BoxProps = {
  size?: string,
  grow?: number
};

export const Box = styled("div")(({ size, grow }: BoxProps) => ({
  flexBasis: size,
  flexGrow: grow
}));
