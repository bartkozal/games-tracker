// @flow
import * as React from "react";
import { connect } from "react-redux";
import { capitalize } from "lodash";
import { Status } from "../../../constants";
import type { Status as StatusType } from "types";
import { setGameStatus } from "state/collection/actions";
import { DropdownButton, DropdownOutlineButton } from "ui/components/Button";
import Dropdown from "./Dropdown";

const mapDispatchToProps = {
  setGameStatus
};

type Props = {
  gameId: number,
  status: StatusType,
  setGameStatus: Function
};

const CollectionDropdown = ({ gameId, status, setGameStatus }: Props) => (
  <Dropdown>
    {(DropdownToggle, DropdownMenu, DropdownMenuItem) => (
      <React.Fragment>
        <DropdownToggle>
          {status ? (
            <DropdownButton>{capitalize(status)}</DropdownButton>
          ) : (
            <DropdownOutlineButton>Add to collection</DropdownOutlineButton>
          )}
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-vertical">
          <DropdownMenuItem
            onClick={() => setGameStatus(gameId, Status.WISHLIST)}
          >
            Wishlist
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setGameStatus(gameId, Status.BACKLOG)}
          >
            Backlog
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setGameStatus(gameId, Status.PLAYING)}
          >
            Playing
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setGameStatus(gameId, Status.COMPLETED)}
          >
            Completed
          </DropdownMenuItem>

          {status ? (
            <DropdownMenuItem
              className="dropdown-menu-item-destructive"
              onClick={() => setGameStatus(gameId, null)}
            >
              Remove from collection
            </DropdownMenuItem>
          ) : null}
        </DropdownMenu>
      </React.Fragment>
    )}
  </Dropdown>
);

export default connect(
  null,
  mapDispatchToProps
)(CollectionDropdown);
