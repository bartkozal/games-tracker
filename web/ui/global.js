import { injectGlobal } from "styled-components";
import { normalize, modularScale } from "polished";
import {
  FONT_STACK,
  FONT_BASE,
  FONT_LEADING,
  FONT_RATIO,
  SPACING_BASE,
  HEADING_ASCENT,
  HEADING_DESCENT,
  HEADING_LEADING,
  HEADING_WEIGHT,
  COLOR_BODY,
  COLOR_TEXT
} from "./constants";

injectGlobal`
  ${normalize()}

  html {
    box-sizing: border-box;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${FONT_STACK};
    font-size: ${FONT_BASE};
    line-height: ${FONT_LEADING};
    background-color: ${COLOR_BODY};
    color: ${COLOR_TEXT};
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  img {
    box-sizing: content-box;
    vertical-align: middle;
  }

  p, dl, dd, hr, blockquote, pre,
  table, th, td,
  form, fieldset, caption, legend {
    padding: 0;
    margin: 0;
  }

  ul, ol {
    margin-top: 0;
  }

  p, ul, ol, dl, hr,
  blockquote, pre, table, form {
    margin-bottom: ${SPACING_BASE};
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  strong, em, small, code, hr {
    line-height: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: ${HEADING_ASCENT};
    margin-bottom: ${HEADING_DESCENT};
    line-height: ${HEADING_LEADING};
    font-weight: ${HEADING_WEIGHT};
  }

  h1 {
    margin-top: 0;
    font-size: ${modularScale(4, FONT_BASE, FONT_RATIO)};
  }

  h2 {
    font-size: ${modularScale(3, FONT_BASE, FONT_RATIO)};
  }

  h3 {
    font-size: ${modularScale(2, FONT_BASE, FONT_RATIO)};
  }

  h4 {
    font-size: ${modularScale(1, FONT_BASE, FONT_RATIO)};
  }

  strong, em, small, code, hr {
    line-height: 1;
  }

  small {
    font-size: ${modularScale(-1, FONT_BASE, FONT_RATIO)};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  sup, sub {
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.4em;
  }

  sub {
    bottom: -0.25em;
  }

  code {
    font-family: monospace;
    white-space: nowrap;
  }

  pre code {
    white-space: pre-wrap;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    text-align: left;
  }
`;
