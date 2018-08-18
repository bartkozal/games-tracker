import React, { Component } from "react";
import PropTypes from "prop-types";
import withOverlay from "ui/decorators/withOverlay";
import Button from "ui/atoms/Button";
import $Dropdown from "./$Dropdown";
import $DropdownMenu from "./$DropdownMenu";
import DropdownItem from "./DropdownItem";

class Dropdown extends Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        callback: PropTypes.func.isRequired
      })
    ).isRequired,
    open: PropTypes.func,
    close: PropTypes.func,
    isOpen: PropTypes.bool,
    clickableElement: PropTypes.any
  };

  onItemClick = callback => {
    this.props.close();
    callback();
  };

  render() {
    const { open, isOpen, clickableElement, label, items } = this.props;
    return (
      <$Dropdown>
        <Button onClick={open}>{label}</Button>

        {isOpen ? (
          <$DropdownMenu innerRef={clickableElement}>
            {items.map(({ callback, label }) => (
              <DropdownItem
                key={label}
                onClick={() => this.onItemClick(callback)}
              >
                {label}
              </DropdownItem>
            ))}
          </$DropdownMenu>
        ) : null}
      </$Dropdown>
    );
  }
}

export default withOverlay(Dropdown);
