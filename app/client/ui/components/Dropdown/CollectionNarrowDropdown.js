// @flow
import * as React from "react";
import { connect } from "react-redux";
import { Status } from "../../../constants";
import type { Status as StatusType } from "types";
import { openModal } from "state/ui/actionCreators";
import { setGameStatus } from "state/collection/actions";
import Icon from "ui/components/Icon";
import { notAuthorized } from "../Modal";
import Dropdown from "./Dropdown";

const mapStateToProps = ({ Auth }) => ({
  userSignedIn: Auth.userSignedIn
});

const mapDispatchToProps = {
  setGameStatus,
  openModal
};

type Props = {
  gameId: number,
  status: StatusType,
  setGameStatus: Function,
  userSignedIn: boolean,
  openModal: Function
};

const CollectionNarrowDropdown = ({
  gameId,
  status,
  setGameStatus,
  userSignedIn,
  openModal
}: Props) => (
  <Dropdown className="dropdown-narrow">
    {(DropdownToggle, DropdownMenu, DropdownMenuItem) => (
      <>
        <DropdownToggle
          testId="collection"
          className="dropdown-narrow-toggle"
          onClick={userSignedIn ? null : () => openModal(notAuthorized)}
        >
          <Icon name="chevron" color="secondary" />
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
      </>
    )}
  </Dropdown>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionNarrowDropdown);
