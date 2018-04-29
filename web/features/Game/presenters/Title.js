import React from "react";
import { Link } from "react-router-dom";
import { H3 } from "ui/Heading";
import { GAME_PATH } from "config/routes";

const Title = ({ children }) => {
  if (!children) return null;

  return (
    <Link to={GAME_PATH}>
      <H3 noAscent noDescent>
        {children}
      </H3>
    </Link>
  );
};

export default Title;
