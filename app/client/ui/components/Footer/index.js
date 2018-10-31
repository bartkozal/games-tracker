// @flow
import * as React from "react";
import { Link } from "react-router-dom";
import { PRiVACY_POLICY_PATH } from "routes/paths";
import "./footer.css";

const Footer = () => (
  <ul className="footer text-small" data-cy="footer">
    <li>Games Tracker API is powered by IGDB</li>
    <li>
      <Link to={PRiVACY_POLICY_PATH}>Privacy Policy</Link>
    </li>
  </ul>
);

export default Footer;
