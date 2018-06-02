import { injectGlobal } from "emotion";
import { COLOR_TEXT, COLOR_BODY } from "./ui";
import "../../node_modules/modern-normalize/modern-normalize.css";

injectGlobal`
  *:focus {
    outline: 0;
  }

  body {
    background-color: ${COLOR_BODY};
    color: ${COLOR_TEXT};
  }
`;
