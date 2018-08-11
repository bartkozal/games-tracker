import React, { Component } from "react";
import PropTypes from "prop-types";
import closeable from "ui/utils/closeable";
import Button from "ui/atoms/Button";
import DropdownWrapper from "./DropdownWrapper";
import DropdownMenu from "./DropdownMenu";
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
    closeableRef: PropTypes.any
  };

  onItemClick = callback => {
    this.props.close();
    callback();
  };

  render() {
    const { open, isOpen, closeableRef, label, items } = this.props;
    return (
      <DropdownWrapper>
        <Button onClick={open}>{label}</Button>

        {isOpen ? (
          <DropdownMenu innerRef={closeableRef}>
            {items.map(({ callback, label }) => (
              <DropdownItem
                key={label}
                onClick={() => this.onItemClick(callback)}
              >
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        ) : null}
      </DropdownWrapper>
    );
  }
}

export default closeable(Dropdown);
