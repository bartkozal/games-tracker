import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import User from "../models/user";

export default () => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ["email"]
      },
      async (_, __, profile, onAuth) => {
        try {
          const email = profile.emails[0].value;
          const user = await User.findOne({ email });

          if (!user) {
            await User.create({ email });
          }

          return onAuth(null, { email });
        } catch (error) {
          return onAuth(error);
        }
      }
    )
  );
};
