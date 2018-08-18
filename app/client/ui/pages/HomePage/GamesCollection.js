import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { groupBy } from "lodash";
import { Game } from "types";
import { fetchGames } from "state/collection/actions";
import GamesGrid from "ui/templates/GamesGrid";

const mapStateToProps = ({ Collection }) => {
  const games = Collection.games;
  const collection = groupBy(games, "status");

  return {
    unassigned: collection.null,
    wishlist: collection.wishlist,
    backlog: collection.backlog,
    playing: collection.playing,
    completed: collection.completed
  };
};

const mapDispatchToProps = {
  fetchGames
};

class GamesCollection extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const { unassigned, wishlist, backlog, playing, completed } = this.props;

    return (
      <Fragment>
        {!!unassigned && (
          <Fragment>
            <div>Unassigned</div>
            <GamesGrid of={unassigned} />
          </Fragment>
        )}

        <div>Wishlist</div>
        <GamesGrid of={wishlist} />

        <div>Backlog</div>
        <GamesGrid of={backlog} />

        <div>Playing</div>
        <GamesGrid of={playing} />

        <div>Completed</div>
        <GamesGrid of={completed} />
      </Fragment>
    );
  }
}

GamesCollection.propTypes = {
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
)(GamesCollection);
