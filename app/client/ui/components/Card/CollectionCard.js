// @flow
import * as React from "react";
import Stack from "../Stack";
import Score from "../Score";
import {
  RatingDropdown,
  PlatformsDropdown,
  CollectionNarrowDropdown
} from "../Dropdown";
import formatTestId from "ui/utils/formatTestId";
import type { Game } from "types";
import "./card";

type Props = {
  game: Game
};

const CollectionCard = ({ game }: Props) => (
  <div
    className="card card-collection"
    data-cy={formatTestId("card", game.name)}
  >
    <Stack>
      <div
        className="card-cover"
        style={{ backgroundImage: `url(${game.cover})` }}
      >
        <PlatformsDropdown game={game} />
      </div>

      <Stack
        direction="column"
        distribute="space-between"
        className="card-content"
      >
        <div className="card-title text-lead">{game.name}</div>
        <Stack align="center" distribute="space-between">
          <Score value={game.score} votes={game.votes} />
          <RatingDropdown gameId={game.id} value={game.rating} />
        </Stack>
      </Stack>

      <CollectionNarrowDropdown gameId={game.id} status={game.status} />
    </Stack>
  </div>
);

export default CollectionCard;
