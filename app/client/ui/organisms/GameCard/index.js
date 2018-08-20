import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { capitalize, xorBy, kebabCase } from "lodash";
import { Status } from "types";
import {
  setGameStatus,
  setGamePlatforms,
  rateGame
} from "state/collection/actions";
import { Flex, Box } from "ui/atoms/FlexBox";
import Button from "ui/atoms/Button";
import Dropdown from "ui/molecules/Dropdown";
import ButtonGroup from "ui/molecules/ButtonGroup";
import Rating from "ui/molecules/Rating";
import Score from "ui/molecules/Score";
import Icon from "ui/atoms/Icon";
import { COLOR_LIGHT } from "ui/quarks";
import GameCover from "./GameCover";
import $GameCard from "./$GameCard";
import $GameRating from "./$GameRating";
import $GameContent from "./$GameContent";
import $GameTitle from "./$GameTitle";

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
    <$GameCard data-test={`game-card-${kebabCase(name)}`}>
      <GameCover src={cover} />

      <$GameRating>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Score value={score} votes={votes} />
          </Box>
          <Box>
            <Rating value={rating} onRate={rating => rateGame(id, rating)} />
          </Box>
        </Flex>
      </$GameRating>

      <$GameContent>
        <$GameTitle>{name}</$GameTitle>

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
          toggle={openDropdown =>
            status && status !== Status.UNASSIGNED ? (
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
        />
      </$GameContent>
    </$GameCard>
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
