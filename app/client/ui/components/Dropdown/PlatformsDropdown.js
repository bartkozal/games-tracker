// @flow
import * as React from "react";
import { connect } from "react-redux";
import { xorBy } from "lodash";
import cx from "classnames";
import { setGamePlatforms } from "state/collection/actions";
import { SmallButton, SmallInactiveButton } from "../Button";
import Icon from "ui/components/Icon";
import Dropdown from "./Dropdown";
import type { Game, Platform } from "types";

const mapDispatchToProps = {
  setGamePlatforms
};

type Props = {
  game: Game,
  setGamePlatforms: Function
};

const renderDropdownToggle = (userPlatforms: Platform[]) => {
  if (userPlatforms.length > 1) {
    return <SmallButton>{userPlatforms.length}</SmallButton>;
  }

  if (userPlatforms.length === 1) {
    return <SmallButton>{userPlatforms[0].slug}</SmallButton>;
  }

  return (
    <SmallInactiveButton testId="platforms">
      <Icon name="gamepad" color="primary" />
    </SmallInactiveButton>
  );
};

const PlatformsDropdown = ({ game, setGamePlatforms }: Props) => (
  <Dropdown>
    {(DropdownToggle, DropdownMenu, DropdownMenuItem) => (
      <>
        <DropdownToggle
          className="dropdown-platforms-toggle"
          testId="platforms"
        >
          {renderDropdownToggle(game.userPlatforms || [])}
          <Icon name="chevron" className="dropdown-platforms-toggle-chevron" />
        </DropdownToggle>

        <DropdownMenu className="dropdown-platforms-menu">
          {game.platforms.map(platform => {
            const togglePlatform = () =>
              setGamePlatforms(
                game.id,
                xorBy(game.userPlatforms, [platform], "id")
              );
            // TODO refactor using optional chaining
            const isPlatformChecked =
              game.userPlatforms &&
              game.userPlatforms.find(
                userPlatform => userPlatform.id === platform.id
              );

            return (
              <DropdownMenuItem
                key={platform.id}
                className={cx({ checked: isPlatformChecked })}
                onClick={togglePlatform}
              >
                {platform.slug}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenu>
      </>
    )}
  </Dropdown>
);

export default connect(
  null,
  mapDispatchToProps
)(PlatformsDropdown);
