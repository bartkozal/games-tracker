import React, { Component } from "react";
import styled from "react-emotion";
import Button from "./Button";
import {
  SPACING_SMALL,
  SPACING_BASE,
  COLOR_UI,
  DROPDOWN_ITEM,
  DROPDOWN_ITEM_HOVER
} from "../config/ui";

const DropdownWrapper = styled("div")({
  position: "relative"
});

const DropdownMenu = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 34,
  left: 0,
  paddingTop: SPACING_SMALL,
  paddingBottom: SPACING_SMALL,
  border: `1px solid ${COLOR_UI}`,
  backgroundColor: DROPDOWN_ITEM
});

const DropdownItem = styled("button")({
  margin: 0,
  paddingTop: SPACING_SMALL,
  paddingBottom: SPACING_SMALL,
  paddingRight: SPACING_BASE,
  paddingLeft: SPACING_BASE,
  border: 0,
  textAlign: "left",
  backgroundColor: DROPDOWN_ITEM,
  width: "100%",
  ":hover": {
    backgroundColor: DROPDOWN_ITEM_HOVER,
    cursor: "pointer"
  }
});

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.menu = React.createRef();
  }

  state = {
    isOpen: false
  };

  open = () => {
    this.setState({ isOpen: true }, () => {
      document.addEventListener("click", this.close);
    });
  };

  close = event => {
    if (!this.menu.current.contains(event.target)) {
      this.setState({ isOpen: false }, () => {
        document.removeEventListener("click", this.close);
      });
    }
  };

  render() {
    const { toggle, items } = this.props;
    return (
      <DropdownWrapper>
        <Button onClick={this.open}>{toggle}</Button>

        {this.state.isOpen ? (
          <DropdownMenu innerRef={this.menu}>
            {items.map(({ onClick, label }) => (
              <DropdownItem key={label} onClick={onClick}>
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        ) : null}
      </DropdownWrapper>
    );
  }
}
