import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Flex, Box } from "../atoms/FlexBox";
import Image from "../atoms/Image";
import Dropdown from "../molecules/Dropdown";
import Rating from "../molecules/Rating";
import { requestGameUpdate } from "../../state/collection/actions";
import { statusType } from "../../state/collection/types";
import { slugify } from "../../state/collection/utils";

const mapStateToProps = ({ Collection }, { name }) => ({
  gameFromCollection: Collection[slugify(name)] || {}
});

const mapDispatchToProps = {
  requestGameUpdate
};

class GameCard extends Component {
  render() {
    const { name, cover, platforms, requestGameUpdate } = this.props;
    const { status } = this.props.gameFromCollection;
    const game = {
      name,
      cover,
      platforms,
      status
    };

    return (
      <Fragment>
        <Flex justifyContent="space-between">
          <Box>
            <Rating score={0} />
          </Box>
          <Box>
            <Rating score={0} />
          </Box>
        </Flex>

        <Image src={cover} alt={name} fullWidth />

        <div>{name}</div>
        <div>{platforms.join(", ")}</div>

        {status ? (
          status
        ) : (
          <Dropdown
            toggle="Add to Shelf"
            items={[
              {
                label: "Wishlist",
                callback: () =>
                  requestGameUpdate({
                    ...game,
                    status: statusType.WISHLIST
                  })
              },
              {
                label: "Backlog",
                callback: () =>
                  requestGameUpdate({
                    ...game,
                    status: statusType.BACKLOG
                  })
              },
              {
                label: "Playing",
                callback: () =>
                  requestGameUpdate({
                    ...game,
                    status: statusType.PLAYING
                  })
              },
              {
                label: "Completed",
                callback: () =>
                  requestGameUpdate({
                    ...game,
                    status: statusType.COMPLETED
                  })
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
