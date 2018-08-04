import { Strategy } from "passport-facebook";
import User from "../../models/user";
import jwt from "jsonwebtoken";

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
      let user = await User.query().findOne({ email: "foo@exmaple.com" });

      if (!user) {
        user = await User.query().insert({ email });
      }

      const token = jwt.sign({ id: user.id, email }, process.env.APP_SECRET);

      return onAuth(null, { email, token });
    } catch (error) {
      return onAuth(error);
    }
  }
);
