import styled from "react-emotion";

const Flex = styled("div")(
  {
    display: "flex"
  },
  ({ collapse, alignItems, justifyContent, direction }) => ({
    flexDirection: direction,
    flexWrap: collapse ? "wrap" : null,
    alignItems,
    justifyContent
  })
);

export default Flex;
