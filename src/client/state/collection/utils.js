import { deburr, camelCase } from "lodash";

export const slugify = name => camelCase(deburr(name));
