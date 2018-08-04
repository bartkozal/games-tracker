import React from "react";
import { connect } from "react-redux";
import { capitalize, xor, kebabCase } from "lodash";
import { Flex, Box } from "../atoms/FlexBox";
import Image from "../atoms/Image";
import Dropdown from "../molecules/Dropdown";
import ButtonGroup from "../molecules/ButtonGroup";
import Rating from "../molecules/Rating";
import Score from "../molecules/Score";
import {
  setGameStatus,
  setGamePlatforms,
  rateGame
} from "../../state/collection/actions";
import { statusType } from "../../state/collection/types";

const mapDispatchToProps = {
  setGameStatus,
  setGamePlatforms,
  rateGame
};

const GameCard = ({ game, setGameStatus, setGamePlatforms, rateGame }) => {
  const {
    id,
    name,
    cover,
    platforms,
    userPlatforms,
    status,
    rating,
    score,
    votes
  } = game;

  return (
    <div data-test={`game-card-${kebabCase(name)}`}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Score value={score} votes={votes} />
        </Box>
        <Box>
          <Rating value={rating} onRate={rating => rateGame(id, rating)} />
        </Box>
      </Flex>

      <Image src={cover} alt={name} fullWidth />

      <div>{name}</div>

      <ButtonGroup
        buttons={platforms.map(platform => ({
          caption: platform,
          type:
            userPlatforms && userPlatforms.includes(platform)
              ? "primary"
              : "outline",
          callback: () => setGamePlatforms(id, xor(userPlatforms, [platform]))
        }))}
      />

      <Dropdown
        toggle={capitalize(status) || "Add to collection"}
        items={[
          {
            label: "Wishlist",
            callback: () => setGameStatus(id, statusType.WISHLIST)
          },
          {
            label: "Backlog",
            callback: () => setGameStatus(id, statusType.BACKLOG)
          },
          {
            label: "Playing",
            callback: () => setGameStatus(id, statusType.PLAYING)
          },
          {
            label: "Completed",
            callback: () => setGameStatus(id, statusType.COMPLETED)
          }
        ]}
      />
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(GameCard);
