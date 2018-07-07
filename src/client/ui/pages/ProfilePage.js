import React, { Fragment } from "react";
import { connect } from "react-redux";
import { groupBy } from "lodash";
import Subtitle from "../atoms/Subtitle";
import { Flex, Box } from "../atoms/FlexBox";
import GameCard from "../organisms/GameCard";
import { statusType } from "../../state/collection/types";

const mapStateToProps = ({ Collection }) => {
  const collection = groupBy(Collection, "status");

  return {
    [statusType.WISHLIST]: collection[statusType.WISHLIST] || [],
    [statusType.BACKLOG]: collection[statusType.BACKLOG] || [],
    [statusType.PLAYING]: collection[statusType.PLAYING] || [],
    [statusType.COMPLETED]: collection[statusType.COMPLETED] || []
  };
};

const ProfilePage = ({ wishlist, backlog, playing, completed }) => (
  <Fragment>
    <Subtitle>Wishlist</Subtitle>
    <Flex wrap="wrap">
      {wishlist.map(({ name, cover, platforms }) => (
        <Box key={name} size="25%">
          <GameCard name={name} cover={cover} platforms={platforms} />
        </Box>
      ))}
    </Flex>

    <Subtitle>Backlog</Subtitle>
    <Flex wrap="wrap">
      {backlog.map(({ name, cover, platforms }) => (
        <Box key={name} size="25%">
          <GameCard name={name} cover={cover} platforms={platforms} />
        </Box>
      ))}
    </Flex>

    <Subtitle>Playing</Subtitle>
    <Flex wrap="wrap">
      {playing.map(({ name, cover, platforms }) => (
        <Box key={name} size="25%">
          <GameCard name={name} cover={cover} platforms={platforms} />
        </Box>
      ))}
    </Flex>

    <Subtitle>Completed</Subtitle>
    <Flex wrap="wrap">
      {completed.map(({ name, cover, platforms }) => (
        <Box key={name} size="25%">
          <GameCard name={name} cover={cover} platforms={platforms} />
        </Box>
      ))}
    </Flex>
  </Fragment>
);

export default connect(mapStateToProps)(ProfilePage);
