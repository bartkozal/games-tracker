import React from "react";

export const Flex = ({
  children,
  wrap,
  alignItems,
  justifyContent,
  direction
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: direction,
      flexWrap: wrap,
      alignItems,
      justifyContent
    }}
  >
    {children}
  </div>
);

export const Box = ({ children, size, grow }) => (
  <div
    style={{
      flexBasis: size,
      flexGrow: grow
    }}
  >
    {children}
  </div>
);
