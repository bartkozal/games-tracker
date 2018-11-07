// @flow
import * as React from "react";
import Dropdown from "./Dropdown";

class PlatformsDropdown extends React.Component<any> {
  render() {
    // {(platform: Platform) => {
    //   const togglePlatform = () =>
    //     setGamePlatforms(
    //       game.id,
    //       xorBy(game.userPlatforms, [platform], "id")
    //     );
    //   // TODO refactor using optional chaining
    //   const isPlatformChecked =
    //     game.userPlatforms &&
    //     game.userPlatforms.find(
    //       userPlatform => userPlatform.id === platform.id
    //     );

    //   return isPlatformChecked ? (
    //     <SmallButton onClick={togglePlatform}>
    //       {platform.slug}
    //     </SmallButton>
    //   ) : (
    //     <SmallInactiveButton onClick={togglePlatform}>
    //       {platform.slug}
    //     </SmallInactiveButton>
    //   );
    // }}

    return (
      <Dropdown>
        {(DropdownToggle, DropdownMenu, DropdownMenuItem) => (
          // TODO refactor to use <>
          <React.Fragment>
            <DropdownToggle testId="platforms">Foo</DropdownToggle>

            <DropdownMenu>
              <DropdownMenuItem>Bar</DropdownMenuItem>
            </DropdownMenu>
          </React.Fragment>
        )}
      </Dropdown>
    );
  }
}

export default PlatformsDropdown;
