import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { groupBy } from "lodash";
import { fetchGames } from "../../state/collection/actions";
import Subtitle from "../atoms/Subtitle";
import { Flex, Box } from "../atoms/FlexBox";
import GameCard from "../organisms/GameCard";

const mapStateToProps = ({ Collection }) => {
  const games = Collection.games;
  const collection = groupBy(games, "status");

  return {
    unassigned: collection.undefined || [],
    wishlist: collection.wishlist || [],
    backlog: collection.backlog || [],
    playing: collection.playing || [],
    completed: collection.completed || []
  };
};

const mapDispatchToProps = {
  fetchGames
};

class CollectionPage extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const { unassigned, wishlist, backlog, playing, completed } = this.props;

    return (
      <Fragment>
        {!!unassigned.length && (
          <Fragment>
            <Subtitle>Unassigned</Subtitle>
            <Flex wrap="wrap">
              {unassigned.map(game => (
                <Box key={game.id} size="25%">
                  <GameCard game={game} />
                </Box>
              ))}
            </Flex>
          </Fragment>
        )}

        <Subtitle>Wishlist</Subtitle>
        <Flex wrap="wrap">
          {wishlist.map(game => (
            <Box key={game.id} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <Subtitle>Backlog</Subtitle>
        <Flex wrap="wrap">
          {backlog.map(game => (
            <Box key={game.id} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <Subtitle>Playing</Subtitle>
        <Flex wrap="wrap">
          {playing.map(game => (
            <Box key={game.id} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <Subtitle>Completed</Subtitle>
        <Flex wrap="wrap">
          {completed.map(game => (
            <Box key={game.id} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPage);