import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty, groupBy, capitalize } from "lodash";
import { fetchGames } from "state/collection/actions";
import Tabs from "ui/molecules/Tabs";
import GamesGrid from "ui/templates/GamesGrid";
import { Game, Status } from "types";

const mapStateToProps = ({ Collection }) => ({
  collection: groupBy(Collection.games, "status")
});

const mapDispatchToProps = {
  fetchGames
};

class GamesCollection extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const { collection } = this.props;

    if (isEmpty(collection)) {
      return null;
    }

    return (
      <Tabs
        items={[
          Status.UNASSIGNED,
          Status.WISHLIST,
          Status.BACKLOG,
          Status.PLAYING,
          Status.COMPLETED
        ].map(status => ({
          tab: capitalize(status),
          content: <GamesGrid of={collection[status]} />,
          default: status === Status.PLAYING,
          hidden: status === Status.UNASSIGNED && !collection[status]
        }))}
      />
    );
  }
}

GamesCollection.propTypes = {
  collection: PropTypes.shape({
    unassigned: PropTypes.arrayOf(Game),
    wishlist: PropTypes.arrayOf(Game),
    backlog: PropTypes.arrayOf(Game),
    playing: PropTypes.arrayOf(Game),
    completed: PropTypes.arrayOf(Game)
  }),
  fetchGames: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesCollection);
