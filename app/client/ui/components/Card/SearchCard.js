// @flow
import * as React from "react";
import { connect } from "react-redux";
import { xorBy } from "lodash";
import { setGamePlatforms } from "state/collection/actions";
import Stack from "../Stack";
import Score from "../Score";
import { SmallButton, SmallInactiveButton } from "../Button";
import { RatingDropdown, CollectionDropdown } from "../Dropdown";
import CardTitle from "./CardTitle";
import formatTestId from "ui/utils/formatTestId";
import type { Game, Platform } from "types";
import "./card";

const mapDispatchToProps = {
  setGamePlatforms
};

type Props = {
  game: Game,
  setGamePlatforms: Function
};

const SearchCard = ({ game, setGamePlatforms }: Props) => (
  <div className="card card-search" data-cy={formatTestId("card", game.name)}>
    <div
      className="card-cover"
      style={{ backgroundImage: `url(${game.cover})` }}
    >
      <div className="card-rating">
        <Stack align="center" distribute="space-between">
          <Score value={game.score} votes={game.votes} />
          <RatingDropdown gameId={game.id} value={game.rating} />
        </Stack>
      </div>

      <div className="card-platforms">
        <Stack direction="column">
          {game.platforms.map((platform: Platform) => {
            const togglePlatform = () =>
              setGamePlatforms(
                game.id,
                xorBy(game.userPlatforms, [platform], "id")
              );
            const isPlatformChecked =
              game.userPlatforms &&
              game.userPlatforms.find(
                userPlatform => userPlatform.id === platform.id
              );

            return isPlatformChecked ? (
              <SmallButton onClick={togglePlatform} key={platform.id}>
                {platform.slug}
              </SmallButton>
            ) : (
              <SmallInactiveButton onClick={togglePlatform} key={platform.id}>
                {platform.slug}
              </SmallInactiveButton>
            );
          })}
        </Stack>
      </div>
    </div>

    <div className="card-content">
      <CardTitle url={game.url} name={game.name} />
      <CollectionDropdown gameId={game.id} status={game.status} />
    </div>
  </div>
);

export default connect(
  null,
  mapDispatchToProps
)(SearchCard);
