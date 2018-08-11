import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { groupBy } from "lodash";
import { Game } from "types";
import { fetchGames } from "state/collection/actions";
import { Flex, Box } from "ui/atoms/FlexBox";
import GameCard from "ui/organisms/GameCard";

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
            <div>Unassigned</div>
            <Flex collapse>
              {unassigned.map(game => (
                <Box key={game.id} size="25%">
                  <GameCard game={game} />
                </Box>
              ))}
            </Flex>
          </Fragment>
        )}

        <div>Wishlist</div>
        <Flex collapse>
          {wishlist.map(game => (
            <Box key={game.id} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <div>Backlog</div>
        <Flex collapse>
          {backlog.map(game => (
            <Box key={game.id} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <div>Playing</div>
        <Flex collapse>
          {playing.map(game => (
            <Box key={game.id} size="25%">
              <GameCard game={game} />
            </Box>
          ))}
        </Flex>

        <div>Completed</div>
        <Flex collapse>
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

CollectionPage.propTypes = {
  unassigned: PropTypes.arrayOf(Game),
  wishlist: PropTypes.arrayOf(Game),
  backlog: PropTypes.arrayOf(Game),
  playing: PropTypes.arrayOf(Game),
  completed: PropTypes.arrayOf(Game),
  fetchGames: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPage);
