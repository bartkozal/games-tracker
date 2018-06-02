import React from "react";
import Dropdown from "./Dropdown";

const GameStatus = ({ type }) => (
  <div>
    {type ? (
      type
    ) : (
      <Dropdown
        toggle="Add to Shelf"
        items={[
          { label: "Wishlist", onClick: () => null },
          { label: "Backlog", onClick: () => null },
          { label: "Playing", onClick: () => null },
          { label: "Completed", onClick: () => null }
        ]}
      />
    )}
  </div>
);

export default GameStatus;
