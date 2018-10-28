// @flow
import { kebabCase } from "lodash";

const formatTestId = (element: string, label?: string): string =>
  kebabCase(`${element} ${label ? label : ""}`);

export default formatTestId;
