import React from "react";
import { marginVertical } from "../utils";

const Title = ({ children }) => (
  <h1
    style={{
      ...marginVertical(0)
    }}
  >
    {children}
  </h1>
);

export default Title;
