// @flow
import * as React from "react";

type Props = {
  url: string,
  name: string
};

const CardTitle = ({ url, name }: Props) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="card-title"
  >
    {name}
  </a>
);

export default CardTitle;
