import React from "react";
import PropTypes from "prop-types";
import { url } from "gravatar";
import Image from "ui/atoms/Image";

const AVATAR_SIZE = 48;

const Avatar = ({ email, size = AVATAR_SIZE * 2, onClick }) => (
  <Image
    data-cy="avatar"
    type="circle"
    width={AVATAR_SIZE}
    src={url(email, { size })}
    alt="Avatar"
    onClick={onClick}
  />
);

Avatar.propTypes = {
  email: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func
};

export default Avatar;
