import Facebook from "./facebook.svg";
import Search from "./search.svg";
import StarEmpty from "./star-empty.svg";
import StarFull from "./star-full.svg";
import User from "./user.svg";

export const getSvg = name => {
  switch (name) {
    case "facebook":
      return Facebook;
    case "search":
      return Search;
    case "star-empty":
      return StarEmpty;
    case "star-full":
      return StarFull;
    case "user":
      return User;
  }
};
