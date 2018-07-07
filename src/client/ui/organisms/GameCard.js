import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Flex, Box } from "../atoms/FlexBox";
import Image from "../atoms/Image";
import Dropdown from "../molecules/Dropdown";
import Rating from "../molecules/Rating";
import { collectionType } from "../../state/collection";
import { addGameToCollection } from "../../state/collection/actions";

const mapStateToProps = ({ Collection }) => ({
  userCollection: Collection.collection
});

const mapDispatchToProps = {
  addGameToCollection
};

class GameCard extends Component {
  render() {
    const {
      name,
      cover,
      platforms,
      userCollection,
      addGameToCollection
    } = this.props;

    const { rating, userRating, userGameCollection } =
      userCollection.find(game => name === game.name) || {};

    const game = {
      name,
      cover,
      platforms
    };

    return (
      <Fragment>
        <Flex justifyContent="space-between">
          <Box>
            <Rating score={rating} />
          </Box>
          <Box>
            <Rating score={userRating} />
          </Box>
        </Flex>

        <Image src={cover} alt={name} fullWidth />

        <div>{name}</div>
        <div>{platforms.join(", ")}</div>

        {userGameCollection ? (
          userGameCollection
        ) : (
          <Dropdown
            toggle="Add to Shelf"
            items={[
              {
                label: "Wishlist",
                callback: () =>
                  addGameToCollection(game, collectionType.WISHLIST)
              },
              {
                label: "Backlog",
                callback: () =>
                  addGameToCollection(game, collectionType.BACKLOG)
              },
              {
                label: "Playing",
                callback: () =>
                  addGameToCollection(game, collectionType.PLAYING)
              },
              {
                label: "Completed",
                callback: () =>
                  addGameToCollection(game, collectionType.COMPLETED)
              }
            ]}
          />
        )}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCard);
