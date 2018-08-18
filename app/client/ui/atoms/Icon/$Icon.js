import styled from "react-emotion";

const $Icon = styled("div")(
  {
    display: "inline-flex"
  },
  ({ spacing, onClick }) => ({
    marginRight: spacing,
    cursor: onClick ? "pointer" : "normal"
  })
);

export default $Icon;
