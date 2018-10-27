// @flow

const ordinalify = (number: 3 | 4 | 5): string => {
  if (number === 3) return "third";
  if (number === 4) return "quarter";
  if (number === 5) return "fifth";
  return "";
};

export default ordinalify;
