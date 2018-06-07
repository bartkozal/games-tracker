import React from "react";
import styled from "react-emotion";
import { url } from "gravatar";

const AVATAR_SIZE = 48;

const Img = styled("img")({
  borderRadius: "50%",
  width: AVATAR_SIZE
});

const Avatar = ({ email, size = AVATAR_SIZE * 2 }) => (
  <Img src={url(email, { size })} alt="Avatar" />
);

export default Avatar;
