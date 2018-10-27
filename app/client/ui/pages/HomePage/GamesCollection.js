// @flow
import * as React from "react";
import { connect } from "react-redux";
import { isEmpty, groupBy } from "lodash";
import { fetchGames } from "state/collection/actions";
import Grid from "ui/containers/Grid";
import Card from "ui/components/Card";
import { type Game } from "types";

const mapStateToProps = ({ Collection }) => ({
  collection: groupBy(Collection.games, "status")
});

const mapDispatchToProps = {
  fetchGames
};

type Props = {
  collection: {
    unassigned: Game[],
    wishlist: Game[],
    backlog: Game[],
    playing: Game[],
    completed: Game[]
  },
  fetchGames: Function
};

class GamesCollection extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const { collection } = this.props;

    if (isEmpty(collection)) return null;

    // <Tabs
    //   items={[
    //     Status.UNASSIGNED,
    //     Status.WISHLIST,
    //     Status.BACKLOG,
    //     Status.PLAYING,
    //     Status.COMPLETED
    //   ].map(status => ({
    //     tab: capitalize(status) || "Unassigned",
    //     content: <GamesGrid of={collection[status]} />,
    //     default: status === Status.PLAYING,
    //     hidden: status === Status.UNASSIGNED && !collection[status]
    //   }))}
    // />

    return (
      <Grid of={collection[null]} perRow={5}>
        {game => <Card game={game} />}
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesCollection);
