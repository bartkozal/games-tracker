// @flow
import * as React from "react";
import { connect } from "react-redux";
import { rateGame } from "state/collection/actions";
import Rating from "ui/components/Rating";
import Dropdown from "./Dropdown";

const mapDispatchToProps = {
  rateGame
};

type Props = {
  gameId: number,
  value: number,
  rateGame: Function
};

class RatingDropdown extends React.Component<Props> {
  render() {
    const { gameId, value } = this.props;

    return (
      <Dropdown>
        {({ DropdownToggle, DropdownMenu, DropdownMenuItem }) => (
          <React.Fragment>
            <DropdownToggle>
              <Rating value={value} />
            </DropdownToggle>

            <DropdownMenu>
              <DropdownMenuItem onClick={rating => rateGame(gameId, rating)}>
                star
              </DropdownMenuItem>
            </DropdownMenu>
          </React.Fragment>
        )}
      </Dropdown>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RatingDropdown);
