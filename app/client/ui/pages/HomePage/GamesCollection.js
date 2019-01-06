// @flow
import * as React from "react";
import { connect } from "react-redux";
import { isEmpty, groupBy } from "lodash";
import { fetchGames } from "state/collection/actions";
import Grid from "ui/components/Grid";
import { CollectionCard } from "ui/components/Card";
import Tabs from "ui/components/Tabs";
import type { Game } from "types";
import { Status } from "../../../constants";

const mapStateToProps = ({ Collection }) => ({
  collection: groupBy(
    Collection.games,
    game => game.status || Status.UNASSIGNED
  )
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

    return (
      <Tabs defaultTab={Status.PLAYING}>
        {TabItem =>
          [
            Status.UNASSIGNED,
            Status.WISHLIST,
            Status.BACKLOG,
            Status.PLAYING,
            Status.COMPLETED
          ].map(label => (
            <TabItem
              key={label}
              label={label}
              hidden={
                label === Status.UNASSIGNED && !collection[Status.UNASSIGNED]
              }
            >
              {collection[label] ? (
                <Grid of={collection[label]} perRow={3}>
                  {game => <CollectionCard game={game} />}
                </Grid>
              ) : null}
            </TabItem>
          ))
        }
      </Tabs>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesCollection);
