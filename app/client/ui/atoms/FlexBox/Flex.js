import styled from "react-emotion";

const Flex = styled("div")(
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

export default Flex;
