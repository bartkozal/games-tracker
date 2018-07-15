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
    wishlist: collection.wishlist || [],
    backlog: collection.backlog || [],
    playing: collection.playing || [],
    completed: collection.completed || []
  };
};

const mapDispatchToProps = {
  fetchGames
};

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const { wishlist, backlog, playing, completed } = this.props;

    return (
      <Fragment>
        <Subtitle>Wishlist</Subtitle>
        <Flex wrap="wrap">
          {wishlist.map(game => (
            <Box key={game.name} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <Subtitle>Backlog</Subtitle>
        <Flex wrap="wrap">
          {backlog.map(game => (
            <Box key={game.name} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <Subtitle>Playing</Subtitle>
        <Flex wrap="wrap">
          {playing.map(game => (
            <Box key={game.name} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <Subtitle>Completed</Subtitle>
        <Flex wrap="wrap">
          {completed.map(game => (
            <Box key={game.name} size="25%">
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
)(ProfilePage);
