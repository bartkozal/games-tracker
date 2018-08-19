import React, { Component } from "react";
import PropTypes from "prop-types";
import withOverlay from "ui/decorators/withOverlay";
import $Dropdown from "./$Dropdown";
import $DropdownMenu from "./$DropdownMenu";
import DropdownItem from "./DropdownItem";

class Dropdown extends Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
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
    const { open, isOpen, clickableElement, items, toggle } = this.props;

    return (
      <$Dropdown>
        {toggle(open)}

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
