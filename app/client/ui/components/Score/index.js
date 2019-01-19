// @flow
import * as React from "react";
import Stack from "../Stack";
import Icon from "ui/components/Icon";
import "./score.scss";

type Props = {
  value?: number,
  votes?: number
};

const Score = ({ value, votes }: Props) => {
  if (!votes) return null;

  return (
    <Stack align="center">
      <Icon name="star" color="light" className="score-star-icon" />
      <div className="score">
        <div className="score-value" data-cy="score-value">
          {/* TODO refactor to use chaining operator */}
          {value && value.toFixed(1)}
        </div>
        <div className="score-votes" data-cy="score-votes">
          ( <Icon name="user" color="light" className="score-user-icon" />{" "}
          {votes} )
        </div>
      </div>
    </Stack>
  );
};

export default Score;
