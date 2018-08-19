import Facebook from "./facebook.svg";
import Search from "./search.svg";
import Star from "./star.svg";
import User from "./user.svg";

export const getIconSVG = name => {
  switch (name) {
    case "facebook":
      return Facebook;
    case "search":
      return Search;
    case "star":
      return Star;
    case "user":
      return User;
  }
};
