import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { capitalize, xorBy, kebabCase } from "lodash";
import { Flex, Box } from "../../atoms/FlexBox";
import Image from "../../atoms/Image";
import Dropdown from "../../molecules/Dropdown";
import ButtonGroup from "../../molecules/ButtonGroup";
import Rating from "../../molecules/Rating";
import Score from "../../molecules/Score";
import {
  setGameStatus,
  setGamePlatforms,
  rateGame
} from "../../../state/collection/actions";
import { Status } from "../../../types";

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
    userPlatforms = [],
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
          caption: platform.slug,
          type: userPlatforms.find(
            userPlatform => userPlatform.id === platform.id
          )
            ? "primary"
            : "outline",
          callback: () =>
            setGamePlatforms(id, xorBy(userPlatforms, [platform], "id"))
        }))}
      />

      <Dropdown
        toggle={capitalize(status) || "Add to collection"}
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
      />
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape(),
  setGameStatus: PropTypes.func,
  setGamePlatforms: PropTypes.func,
  rateGame: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(GameCard);