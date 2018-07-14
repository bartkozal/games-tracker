import { Strategy } from "passport-facebook";
import User from "../models/user";

export default new Strategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["email"]
  },
  async (_, __, profile, onAuth) => {
    try {
      const email = profile.emails[0].value;

      await User.createByEmail(email);

      return onAuth(null, { email });
    } catch (error) {
      return onAuth(error);
    }
  }
);
