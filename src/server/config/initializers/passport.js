import passport from "passport";
import facebookStrategy from "../passport/facebookStrategy";

export default () => {
  passport.use(facebookStrategy);
};
