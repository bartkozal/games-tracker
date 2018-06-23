// @flow
import React, { Component } from "react";
import styled from "react-emotion";
import { paddingVertical, paddingHorizontal } from "../utils";
import {
  SPACING_SMALL,
  SPACING_BASE,
  COLOR_UI,
  DROPDOWN_ITEM,
  DROPDOWN_ITEM_HOVER
} from "../quarks";
import Button from "../atoms/Button";

const DropdownWrapper = styled("div")({
  position: "relative"
});

const DropdownMenu = styled("div")({
  ...paddingVertical(SPACING_SMALL),
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 34,
  left: 0,
  border: `1px solid ${COLOR_UI}`,
  backgroundColor: DROPDOWN_ITEM
});

const DropdownItem = styled("button")({
  ...paddingVertical(SPACING_SMALL),
  ...paddingHorizontal(SPACING_BASE),
  margin: 0,
  border: 0,
  textAlign: "left",
  backgroundColor: DROPDOWN_ITEM,
  width: "100%",
  ":hover": {
    backgroundColor: DROPDOWN_ITEM_HOVER,
    cursor: "pointer"
  }
});

type Props = {
  toggle: string,
  items: Array<{
    label: string,
    onClick: (SyntheticMouseEvent<HTMLButtonElement>) => void
  }>
};

type State = {
  isOpen: boolean
};

export default class Dropdown extends Component<Props, State> {
  menu = React.createRef();

  state = {
    isOpen: false
  };

  open = () => {
    this.setState({ isOpen: true }, () => {
      document.addEventListener("click", this.close);
    });
  };

  close = (event: MouseEvent) => {
    if (this.menu.current && !this.menu.current.contains(event.target)) {
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
