import styled from "react-emotion";

const $Icon = styled("div")(
  {
    display: "inline-flex"
  },
  ({ before, after, onClick }) => ({
    marginLeft: before,
    marginRight: after,
    cursor: onClick ? "pointer" : "default"
  })
);

export default $Icon;
