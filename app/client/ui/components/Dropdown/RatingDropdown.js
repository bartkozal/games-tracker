// @flow
import * as React from "react";
import { connect } from "react-redux";
import { range } from "lodash";
import { openModal } from "state/ui/actionCreators";
import { rateGame } from "state/collection/actions";
import Icon from "ui/components/Icon";
import Rating from "../Rating";
import { notAuthorized } from "../Modal";
import Dropdown from "./Dropdown";

const mapStateToProps = ({ Auth }) => ({
  userSignedIn: Auth.userSignedIn
});

const mapDispatchToProps = {
  rateGame,
  openModal
};

type Props = {
  gameId: number,
  value: number,
  rateGame: Function,
  userSignedIn: boolean,
  openModal: Function
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
    const { gameId, value, rateGame, userSignedIn, openModal } = this.props;
    const { valuePreview } = this.state;

    return (
      <Dropdown>
        {(DropdownToggle, DropdownMenu, DropdownMenuItem) => (
          <>
            <DropdownToggle
              testId="rating"
              onClick={userSignedIn ? null : () => openModal(notAuthorized)}
            >
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
          </>
        )}
      </Dropdown>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingDropdown);
