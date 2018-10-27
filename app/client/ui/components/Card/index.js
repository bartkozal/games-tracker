// @flow
import * as React from "react";
import { connect } from "react-redux";
import { setGamePlatforms } from "state/collection/actions";
import Stack from "ui/containers/Stack";
import cypressify from "ui/utils/cypressify";
import { type Game } from "types";
import "./card.css";

const mapDispatchToProps = {
  setGamePlatforms
};

type Props = {
  game: Game,
  setGamePlatforms: Function
  // setGameStatus: Function,
  // rateGame: Function
};

// import { capitalize, xorBy, kebabCase } from "lodash";
// import { Status } from "constants";

// const isInCollection = status && status !== Status.UNASSIGNED;

const Card = ({ game, setGamePlatforms }: Props) => {
  return (
    <div className="card" data-cy={`game-card-${cypressify(game.name)}`}>
      <div
        className="card-cover"
        style={{ backgroundImage: `url(${game.cover})` }}
      />

      <div className="card-rating">
        <Stack align="center" distribute="space-between">
          Score
          {/* <Score value={score} votes={votes} /> */}
          RatingDropdown
          {/* <Rating value={rating} onRate={rating => rateGame(id, rating)} /> */}
        </Stack>
      </div>

      <div className="padding-base">
        <div className="card-title text-lead">{game.name}</div>
        Platforms
        {/* <ButtonGroup
          buttons={platforms.map(platform => ({
            caption: platform.slug,
            type: userPlatforms.find(
              userPlatform => userPlatform.id === platform.id
            )
              ? "primary"
              : "outline",
            callback: () =>
              setGamePlatforms(id, xorBy(userPlatforms, [platform], "id"))
          }))}
        /> */}
        CollectionDropdown
        {/* <Dropdown
          toggle={openDropdown =>
            isInCollection ? (
              <Button
                onClick={openDropdown}
                size="block"
                rightIcon={<Icon type="chevron" color={COLOR_LIGHT} />}
              >
                {capitalize(status)}
              </Button>
            ) : (
              <Button
                onClick={openDropdown}
                type="outline"
                size="block"
                rightIcon={<Icon type="chevron" />}
              >
                Add to collection
              </Button>
            )
          }
          items={[
            {
              label: "Wishlist",
              callback: () => setGameStatus(id, Status.WISHLIST)
            },
            {
              label: "Backlog",
              callback: () => setGameStatus(id, Status.BACKLOG)
            },
            {
              label: "Playing",
              callback: () => setGameStatus(id, Status.PLAYING)
            },
            {
              label: "Completed",
              callback: () => setGameStatus(id, Status.COMPLETED)
            }
          ]}
          destructiveItems={
            isInCollection
              ? [
                  {
                    label: "Remove from collection",
                    callback: () => setGameStatus(id, null)
                  }
                ]
              : []
          }
        /> */}
      </div>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
