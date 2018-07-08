import React, { Fragment } from "react";
import { connect } from "react-redux";
import { capitalize } from "lodash";
import { Flex, Box } from "../atoms/FlexBox";
import Image from "../atoms/Image";
import Dropdown from "../molecules/Dropdown";
import ButtonGroup from "../molecules/ButtonGroup";
import Rating from "../molecules/Rating";
import { updateGame } from "../../state/collection/actions";
import { statusType } from "../../state/collection/types";

const mapDispatchToProps = {
  updateGame
};

const GameCard = ({ game, updateGame }) => {
  const { name, cover, platforms, status, rating, score, timesRated } = game;

  return (
    <Fragment>
      <Flex justifyContent="space-between">
        <Box>
          <Rating score={score} /> / {timesRated}
        </Box>
        <Box>
          <Rating score={rating} />
        </Box>
      </Flex>

      <Image src={cover} alt={name} fullWidth />

      <div>{name}</div>

      <ButtonGroup
        buttons={Object.entries(platforms).map(([name, selected]) => ({
          caption: name,
          type: selected ? "primary" : "outline",
          callback: () => {}
        }))}
      />

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
