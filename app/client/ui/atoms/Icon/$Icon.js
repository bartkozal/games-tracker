import styled from "react-emotion";

const $Icon = styled("div")(
  {
    display: "inline-flex"
  },
  ({ before, after, onClick }) => ({
    paddingLeft: before,
    paddingRight: after,
    cursor: onClick ? "pointer" : "inherit"
  })
);

export default $Icon;
