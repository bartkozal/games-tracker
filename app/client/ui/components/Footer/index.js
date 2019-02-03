// @flow
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PRIVACY_POLICY_PATH } from "routes/paths";
import { openModal } from "state/ui/actionCreators";
import { removeAccount } from "ui/components/Modal";
import "./footer.scss";

type Props = {
  userSignedIn: boolean,
  openModal: () => void
};

const mapStateToProps = ({ Auth }) => ({
  userSignedIn: Auth.userSignedIn
});

const mapDispatchToProps = {
  openModal
};

const Footer = ({ userSignedIn, openModal }: Props) => {
  const openRemoveAccountModal = (
    event: SyntheticMouseEvent<HTMLLinkElement>
  ) => {
    event.preventDefault();
    openModal(removeAccount);
  };

  return (
    <ul className="footer" data-cy="footer">
      <li>Games Tracker API is powered by IGDB</li>
      <li>
        <Link to={PRIVACY_POLICY_PATH}>Privacy policy</Link>
      </li>
      {userSignedIn ? (
        <li>
          <a href="" onClick={openRemoveAccountModal}>
            Remove my account
          </a>
        </li>
      ) : null}
    </ul>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
