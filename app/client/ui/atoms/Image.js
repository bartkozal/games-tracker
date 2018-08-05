import React from "react";

const Image = (src, alt, type, width, fullWidth) => (
  <img
    src={src}
    alt={alt}
    style={{
      width,
      borderRadius: type === "circle" ? "50%" : null,
      maxWidth: fullWidth ? "100%" : null
    }}
  />
);

export default Image;
