// @flow
import * as React from "react";
import { connect } from "react-redux";
import { xorBy } from "lodash";
import { setGamePlatforms } from "state/collection/actions";
import Stack from "ui/containers/Stack";
import Grid from "ui/containers/Grid";
import Score from "ui/components/Score";
import { SmallButton, SmallInactiveButton } from "ui/components/Button";
import { RatingDropdown, CollectionDropdown } from "ui/components/Dropdown";
import formatTestId from "ui/utils/formatTestId";
import type { Game, Platform } from "types";
import "./card.css";

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
      <div className="card-platforms">
        <Grid of={game.platforms} perRow={3} padding="small">
          {(platform: Platform) => {
            const togglePlatform = () =>
              setGamePlatforms(
                game.id,
                xorBy(game.userPlatforms, [platform], "id")
              );
            // TODO refactor using optional chaining
            const isPlatformChecked =
              game.userPlatforms &&
              game.userPlatforms.find(
                userPlatform => userPlatform.id === platform.id
              );

            return isPlatformChecked ? (
              <SmallButton onClick={togglePlatform}>
                {platform.slug}
              </SmallButton>
            ) : (
              <SmallInactiveButton onClick={togglePlatform}>
                {platform.slug}
              </SmallInactiveButton>
            );
          }}
        </Grid>
      </div>
    </div>

    <div className="card-rating">
      <Stack align="center" distribute="space-between">
        <Score value={game.score} votes={game.votes} />
        <RatingDropdown gameId={game.id} value={game.rating} />
      </Stack>
    </div>

    <div className="padding-base">
      <div className="card-title text-lead">{game.name}</div>
      <CollectionDropdown gameId={game.id} status={game.status} />
    </div>
  </div>
);

export default connect(
  null,
  mapDispatchToProps
)(SearchCard);
