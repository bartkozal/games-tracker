import React from "react";
import { Link } from "react-router-dom";
import { GAME_PATH } from "config/routes";

const Cover = ({ children }) => (
  <Link to={GAME_PATH}>
    <img src={children} />
  </Link>
);

export default Cover;
