import React from "react";
import { marginVertical } from "../utils";

const Subtitle = ({ children }) => (
  <h2
    style={{
      ...marginVertical(0)
    }}
  >
    {children}
  </h2>
);

export default Subtitle;
