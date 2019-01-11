// @flow
import * as React from "react";
import cx from "classnames";
import Cancel from "./cancel.svg";
import Chevron from "./chevron.svg";
import Facebook from "./facebook.svg";
import Gamepad from "./gamepad.svg";
import Search from "./search.svg";
import Star from "./star.svg";
import Unstar from "./unstar.svg";
import User from "./user.svg";
import "./icon.scss";

type Props = {
  name:
    | "cancel"
    | "chevron"
    | "facebook"
    | "gamepad"
    | "search"
    | "star"
    | "unstar"
    | "user",
  color?: "primary" | "secondary" | "accent" | "light" | "destructive",
  className?: string,
  onClick?: (event: SyntheticMouseEvent<HTMLElement>) => void
};

const Icon = ({ name, color = "primary", className, onClick }: Props) => {
  const props = {
    name,
    onClick,
    className: cx(`icon-${String(color)}`, className)
  };

  if (name === "cancel") return <Cancel {...props} />;
  if (name === "chevron") return <Chevron {...props} />;
  if (name === "facebook") return <Facebook {...props} />;
  if (name === "gamepad") return <Gamepad {...props} />;
  if (name === "search") return <Search {...props} />;
  if (name === "star") return <Star {...props} />;
  if (name === "unstar") return <Unstar {...props} />;
  if (name === "user") return <User {...props} />;

  return null;
};

export default Icon;
