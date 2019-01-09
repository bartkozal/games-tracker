// @flow
import * as React from "react";
import Stack from "../Stack";
import StarIcon from "ui/styles/icon/star.svg";
import UserIcon from "ui/styles/icon/user.svg";
import "./score.scss";

type Props = {
  value?: number,
  votes?: number
};

const Score = ({ value, votes }: Props) => {
  if (!votes) return null;

  return (
    <Stack align="center">
      <StarIcon className="score-star-icon" />
      <div className="score">
        <div className="score-value text-lead" data-cy="score-value">
          {/* TODO refactor to use chaining operator */}
          {value && value.toFixed(1)}
        </div>
        <div className="score-votes text-small" data-cy="score-votes">
          ( <UserIcon className="score-user-icon" /> {votes} )
        </div>
      </div>
    </Stack>
  );
};

export default Score;
