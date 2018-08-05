import React, { Component } from "react";
import { kebabCase } from "lodash";
import { paddingVertical, paddingHorizontal } from "../utils";
import {
  SPACING_SMALL,
  SPACING_BASE,
  COLOR_UI,
  DROPDOWN_ITEM
  // DROPDOWN_ITEM_HOVER TODO
} from "../quarks";
import Button from "../atoms/Button";

const DropdownWrapper = ({ children }) => (
  <div style={{ position: "relative" }}>{children}</div>
);

const DropdownMenu = ({ children }) => (
  <div
    style={{
      ...paddingVertical(SPACING_SMALL),
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: 34,
      left: 0,
      border: `1px solid ${COLOR_UI}`,
      backgroundColor: DROPDOWN_ITEM
    }}
  >
    {children}
  </div>
);

const DropdownItem = ({ onClick, children }) => (
  <button
    data-test={`dropdown-item-${kebabCase(children)}`}
    onClick={onClick}
    style={{
      ...paddingVertical(SPACING_SMALL),
      ...paddingHorizontal(SPACING_BASE),
      margin: 0,
      border: 0,
      textAlign: "left",
      backgroundColor: DROPDOWN_ITEM,
      width: "100%"
      // TODO
      // ":hover": {
      //   backgroundColor: DROPDOWN_ITEM_HOVER,
      //   cursor: "pointer"
      // }
    }}
  >
    {children}
  </button>
);

export default class Dropdown extends Component {
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
