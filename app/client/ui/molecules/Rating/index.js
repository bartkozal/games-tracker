import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { times } from "lodash";
import { Flex, Box } from "ui/atoms/FlexBox";
import Icon from "ui/atoms/Icon";
import { COLOR_ACCENT, SPACING_SMALL, COLOR_PRIMARY } from "ui/quarks";
import withOverlay from "ui/decorators/withOverlay";
import $Rating from "./$Rating";
import $RatingToggle from "./$RatingToggle";
import $RatingMenu from "./$RatingMenu";

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
    value: 0
  };

  state = {
    value: this.props.value
  };

  onOverlayClick = () => {
    this.setState({
      value: this.props.value
    });
  };

  preview = nextValue => {
    this.setState({
      value: nextValue
    });
  };

  rate = nextValue => {
    const { onRate, close } = this.props;

    this.setState({
      value: nextValue
    });

    onRate(nextValue);
    close();
  };

  render() {
    const { open, isOpen, clickableElement } = this.props;
    const { value } = this.state;

    return (
      <$Rating>
        <$RatingToggle onClick={open}>
          {value ? (
            <Flex alignItems="center">
              <Box>{value}</Box>

              <Box>
                <Icon type="star" color={COLOR_ACCENT} before={SPACING_SMALL} />
              </Box>
            </Flex>
          ) : (
            "Rate"
          )}
        </$RatingToggle>

        {isOpen && (
          <$RatingMenu innerRef={clickableElement}>
            {times(10, n => (
              <Icon
                key={n}
                type="star"
                color={n < value ? COLOR_ACCENT : COLOR_PRIMARY}
                onClick={() => this.rate(n + 1)}
                onMouseEnter={() => this.preview(n + 1)}
              />
            ))}
          </$RatingMenu>
        )}
      </$Rating>
    );
  }
}

export default withOverlay(Rating);
