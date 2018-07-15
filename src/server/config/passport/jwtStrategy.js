import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../../models/user";

export default new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.APP_SECRET
  },
  async (payload, onAuth) => {
    try {
      const user = await User.findById(payload.id);
      return onAuth(null, user);
    } catch (error) {
      return onAuth(error);
    }
  }
);
