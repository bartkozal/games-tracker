import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { times } from "lodash";
import Icon from "ui/atoms/Icon";
import { COLOR_PRIMARY, COLOR_ACCENT, COLOR_DESTRUCTIVE } from "ui/quarks";
import withOverlay from "ui/decorators/withOverlay";
import $Rating from "./$Rating";
import $RatingMenu from "./$RatingMenu";
import RatingToggle from "./RatingToggle";

class Rating extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
    onRate: PropTypes.func.isRequired,
    open: PropTypes.func,
    close: PropTypes.func,
    isOpen: PropTypes.bool,
    clickableElement: PropTypes.any
  };

  static defaultProps = {
    value: 0,
    isMouseOverUnrate: false
  };

  componentDidUpdate({ value: prevValue }) {
    const { value } = this.props;

    if (prevValue !== value) {
      this.setRatingValue(value);
    }
  }

  state = {
    value: this.props.value
  };

  setRatingValue = nextValue => {
    this.setState({
      value: nextValue
    });
  };

  setMouseOverUnrate = isMouseOverUnrate => {
    this.setState({
      isMouseOverUnrate
    });
  };

  rate = nextValue => {
    const { onRate, close } = this.props;

    this.setRatingValue(nextValue);
    onRate(nextValue);
    close();
  };

  render() {
    const { open, isOpen, clickableElement, value: initialValue } = this.props;
    const { value, isMouseOverUnrate } = this.state;

    return (
      <$Rating>
        <RatingToggle onClick={open} rating={value} />

        {isOpen && (
          <$RatingMenu innerRef={clickableElement}>
            {!!initialValue && (
              <Icon
                color={isMouseOverUnrate ? COLOR_DESTRUCTIVE : COLOR_ACCENT}
                type="unstar"
                onClick={() => this.rate(null)}
                onMouseEnter={() => {
                  this.setMouseOverUnrate(true);
                  this.setRatingValue(0);
                }}
                onMouseLeave={() => {
                  this.setMouseOverUnrate(false);
                  this.setRatingValue(initialValue);
                }}
              />
            )}
            {times(10, n => (
              <Icon
                key={n}
                type="star"
                color={n < value ? COLOR_ACCENT : COLOR_PRIMARY}
                onClick={() => this.rate(n + 1)}
                onMouseEnter={() => this.setRatingValue(n + 1)}
                onMouseLeave={() => this.setRatingValue(initialValue)}
              />
            ))}
          </$RatingMenu>
        )}
      </$Rating>
    );
  }
}

export default withOverlay(Rating);
