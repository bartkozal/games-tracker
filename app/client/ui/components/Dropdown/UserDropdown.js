// @flow
import * as React from "react";
import { connect } from "react-redux";
import { signOut } from "state/auth/actions";
import Icon from "ui/components/Icon";
import Avatar from "../Avatar";
import Dropdown from "./Dropdown";

const mapDispatchToProps = {
  signOut
};

type Props = {
  signOut: Function
};

const UserDropdown = ({ signOut }: Props) => (
  <Dropdown>
    {(DropdownToggle, DropdownMenu, DropdownMenuItem) => (
      // TODO refactor to use <>
      <React.Fragment>
        <DropdownToggle testId="user">
          <Avatar />
          <Icon name="chevron" className="dropdown-toggle-chevron" />
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-vertical">
          <DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
        </DropdownMenu>
      </React.Fragment>
    )}
  </Dropdown>
);

export default connect(
  null,
  mapDispatchToProps
)(UserDropdown);
