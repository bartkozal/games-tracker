// @flow
import * as React from "react";
import { connect } from "react-redux";
import { signOut } from "state/auth/actions";
import Avatar from "ui/components/Avatar";
import Dropdown from "./Dropdown";
import ChevronIcon from "../../foundations/icon/chevron.svg";

const mapDispatchToProps = {
  signOut
};

type Props = {
  signOut: Function
};

const UserDropdown = ({ signOut }: Props) => (
  <Dropdown>
    {({ DropdownToggle, DropdownMenu, DropdownMenuItem }) => (
      // TODO refactor to use <>
      <React.Fragment>
        <DropdownToggle>
          <Avatar />
          <ChevronIcon className="dropdown-toggle-chevron" />
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
