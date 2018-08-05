import React from "react";
import { CONTAINER_WIDTH, SPACING_BASE } from "../quarks";
import { marginHorizontal, paddingHorizontal } from "../utils";

const Container = ({ children }) => (
  <div
    style={{
      ...marginHorizontal("auto"),
      ...paddingHorizontal(SPACING_BASE),
      maxWidth: CONTAINER_WIDTH
    }}
  >
    {children}
  </div>
);

export default Container;
