import styled from "react-emotion";

export const Flex = styled("div")(
  {
    display: "flex"
  },
  ({ alignItems, justifyContent }) => ({
    alignItems,
    justifyContent
  })
);

export const Box = styled("div")({});
