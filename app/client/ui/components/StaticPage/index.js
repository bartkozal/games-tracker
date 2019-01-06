// @flow
import * as React from "react";
import "./static-page.css";

type Props = {
  children: React.Node
};

const StaticPage = ({ children }: Props) => (
  <div className="static-page" dangerouslySetInnerHTML={{ __html: children }} />
);

export default StaticPage;
