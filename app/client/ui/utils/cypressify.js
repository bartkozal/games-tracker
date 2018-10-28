// @flow
import type { Node } from "react";
import { kebabCase } from "lodash";

const cypressify = (children: Node): string => kebabCase(children);

export default cypressify;
