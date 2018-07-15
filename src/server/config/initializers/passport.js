import passport from "passport";
import facebookStrategy from "../passport/facebookStrategy";
import jwtStrategy from "../passport/jwtStrategy";

export default () => {
  passport.use(facebookStrategy);
  passport.use(jwtStrategy);
};
