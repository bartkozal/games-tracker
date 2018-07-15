import passport from "passport";
import { Router } from "express";

const auth = Router();

auth.get(
  "/facebook",
  passport.authenticate("facebook", { session: false, scope: ["email"] })
);

auth.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    session: false
  }),
  (req, res) => {
    res.cookie("auth", JSON.stringify(req.user));
    res.redirect("/");
  }
);

export default auth;
