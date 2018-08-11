import React from "react";
import PropTypes from "prop-types";
import { url } from "gravatar";
import Image from "../../atoms/Image";

const AVATAR_SIZE = 48;

const Avatar = ({ email, size = AVATAR_SIZE * 2 }) => (
  <Image
    type="circle"
    width={AVATAR_SIZE}
    src={url(email, { size })}
    alt="Avatar"
  />
);

Avatar.propTypes = {
  email: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default Avatar;
