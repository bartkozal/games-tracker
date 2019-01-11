// @flow
import * as React from "react";
import { connect } from "react-redux";
import { range } from "lodash";
import { rateGame } from "state/collection/actions";
import Icon from "ui/components/Icon";
import Rating from "../Rating";
import Dropdown from "./Dropdown";

const mapDispatchToProps = {
  rateGame
};

type Props = {
  gameId: number,
  value: number,
  rateGame: Function
};

type State = {
  valuePreview: number
};

class RatingDropdown extends React.Component<Props, State> {
  static defaultProps = {
    value: 0
  };

  state = {
    valuePreview: this.props.value
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setValuePreview(this.props.value);
    }
  }

  setValuePreview = value => {
    this.setState({ valuePreview: value });
  };

  render() {
    const { gameId, value, rateGame } = this.props;
    const { valuePreview } = this.state;

    return (
      <Dropdown>
        {(DropdownToggle, DropdownMenu, DropdownMenuItem) => (
          // TODO refactor using <>
          <React.Fragment>
            <DropdownToggle testId="rating">
              <Rating value={valuePreview} />
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-rating">
              {value ? (
                <DropdownMenuItem
                  onClick={() => rateGame(gameId, null)}
                  onMouseEnter={() => this.setValuePreview(-1)}
                  onMouseLeave={() => this.setValuePreview(value)}
                  testId="unrate"
                >
                  <Icon
                    name="unstar"
                    color={value === -1 ? "destructive" : "accent"}
                  />
                </DropdownMenuItem>
              ) : null}

              {range(1, 11).map(rating => (
                <DropdownMenuItem
                  key={rating}
                  onClick={() => rateGame(gameId, rating)}
                  onMouseEnter={() => this.setValuePreview(rating)}
                  onMouseLeave={() => this.setValuePreview(value)}
                  testId={`rate-${rating}`}
                >
                  <Icon
                    name="star"
                    color={rating - 1 < valuePreview ? "accent" : "primary"}
                  />
                </DropdownMenuItem>
              ))}
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
