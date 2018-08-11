import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "ui/atoms/Button";
import DropdownWrapper from "./DropdownWrapper";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";

export default class Dropdown extends Component {
  static propTypes = {
    toggle: PropTypes.node.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        callback: PropTypes.func.isRequired
      })
    ).isRequired
  };

  menu = React.createRef();

  state = {
    isOpen: false
  };

  open = () => {
    this.setState({ isOpen: true }, () => {
      document.addEventListener("click", this.close);
    });
  };

  close = event => {
    if (this.menu.current && !this.menu.current.contains(event.target)) {
      this.setState({ isOpen: false }, () => {
        document.removeEventListener("click", this.close);
      });
    }
  };

  onItemClick = callback => {
    this.setState({ isOpen: false });
    callback();
  };

  render() {
    const { toggle, items } = this.props;
    return (
      <DropdownWrapper>
        <Button onClick={this.open}>{toggle}</Button>

        {this.state.isOpen ? (
          <DropdownMenu innerRef={this.menu}>
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
