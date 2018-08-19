import React from "react";
import PropTypes from "prop-types";
import Icon from "ui/atoms/Icon";
import { random } from "lodash";
import { Flex, Box } from "ui/atoms/FlexBox";
import { COLOR_LIGHT, SPACING_SMALL } from "ui/quarks";
import $Score from "./$Score";
import $ScoreValue from "./$ScoreValue";
import $ScoreVotes from "./$ScoreVotes";

const Score = ({ value, votes }) => {
  if (!votes) {
    return null;
  }

  return (
    <Flex alignItems="center">
      <Box>
        <Icon type="star" color={COLOR_LIGHT} after={SPACING_SMALL} />
      </Box>
      <Box>
        <$Score>
          <$ScoreValue>{value.toFixed(1)}</$ScoreValue>
          <$ScoreVotes>
            ( <Icon type="user" size={10} after={2} color={COLOR_LIGHT} />
            {votes} )
          </$ScoreVotes>
        </$Score>
      </Box>
    </Flex>
  );
};

Score.propTypes = {
  value: PropTypes.number,
  votes: PropTypes.number
};

export default Score;
