import React from "react";
import PropTypes from "prop-types";
import { SPACING_SMALL, COLOR_ACCENT } from "ui/quarks";
import { Flex, Box } from "ui/atoms/FlexBox";
import Icon from "ui/atoms/Icon";
import $RatingToggleUnrate from "./$RatingToggleUnrate";
import $RatingToggle from "./$RatingToggle";

const RatingToggle = ({ onClick, rating, isMouseOverUnrate }) => {
  return (
    <$RatingToggle onClick={onClick}>
      {rating ? (
        <Flex alignItems="center">
          <Box>{rating}</Box>

          <Box>
            <Icon type="star" color={COLOR_ACCENT} before={SPACING_SMALL} />
          </Box>
        </Flex>
      ) : isMouseOverUnrate ? (
        <$RatingToggleUnrate>Unrate?</$RatingToggleUnrate>
      ) : (
        "Rate"
      )}
    </$RatingToggle>
  );
};

RatingToggle.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isMouseOverUnrate: PropTypes.bool.isRequired
};

export default RatingToggle;
