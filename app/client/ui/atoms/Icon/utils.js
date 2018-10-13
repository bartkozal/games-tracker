import Cancel from "./cancel.svg";
import Chevron from "./chevron.svg";
import Facebook from "./facebook.svg";
import Search from "./search.svg";
import Star from "./star.svg";
import Unstar from "./unstar.svg";
import User from "./user.svg";

export const getIconSVG = name => {
  switch (name) {
    case "cancel":
      return Cancel;
    case "chevron":
      return Chevron;
    case "facebook":
      return Facebook;
    case "search":
      return Search;
    case "star":
      return Star;
    case "unstar":
      return Unstar;
    case "user":
      return User;
  }
};
