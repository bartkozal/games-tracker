import Facebook from "./facebook.svg";
import Search from "./search.svg";
import Star from "./star.svg";
import User from "./user.svg";
import Chevron from "./chevron.svg";
import Cancel from "./cancel.svg";

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
    case "chevron":
      return Chevron;
    case "cancel":
      return Cancel;
  }
};
