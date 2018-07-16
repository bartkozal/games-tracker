import React, { Fragment } from "react";
import { connect } from "react-redux";
import { capitalize } from "lodash";
import { Flex, Box } from "../atoms/FlexBox";
import Image from "../atoms/Image";
import Dropdown from "../molecules/Dropdown";
// import ButtonGroup from "../molecules/ButtonGroup";
import Button from "../atoms/Button";
import Rating from "../molecules/Rating";
import Score from "../molecules/Score";
import { updateGame, rateGame } from "../../state/collection/actions";
import { statusType } from "../../state/collection/types";

const mapDispatchToProps = {
  updateGame,
  rateGame
};

const GameCard = ({ game, updateGame, rateGame }) => {
  const { name, cover, platforms, status, rating, score, votes } = game;

  return (
    <Fragment>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Score value={score} votes={votes} />
        </Box>
        <Box>
          <Rating value={rating} onRate={rating => rateGame(game, rating)} />
        </Box>
      </Flex>

      <Image src={cover} alt={name} fullWidth />

      <div>{name}</div>

      {platforms.map(platform => <Button type="outline">{platform}</Button>)}
      {/* <ButtonGroup
        buttons={platforms.map((platform => ({
          caption: platform,
          type: "outline",
          callback: () =>
            updateGame({
              ...game,
              platforms: {
                ...game.platforms,
                [platform]: !selected
              }
            })
        }))}
      /> */}

      <Dropdown
        toggle={capitalize(status) || "Add to collection"}
        items={[
          {
            label: "Wishlist",
            callback: () =>
              updateGame({
                ...game,
                status: statusType.WISHLIST
              })
          },
          {
            label: "Backlog",
            callback: () =>
              updateGame({
                ...game,
                status: statusType.BACKLOG
              })
          },
          {
            label: "Playing",
            callback: () =>
              updateGame({
                ...game,
                status: statusType.PLAYING
              })
          },
          {
            label: "Completed",
            callback: () =>
              updateGame({
                ...game,
                status: statusType.COMPLETED
              })
          }
        ]}
      />
    </Fragment>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(GameCard);
