// @flow
import React from "react";
import { url } from "gravatar";
import Image from "../atoms/Image";

const AVATAR_SIZE = 48;

type Props = {
  email: string,
  size?: number
};

const Avatar = ({ email, size = AVATAR_SIZE * 2 }: Props) => (
  <Image
    type="circle"
    width={AVATAR_SIZE}
    src={url(email, { size })}
    alt="Avatar"
  />
);

export default Avatar;
