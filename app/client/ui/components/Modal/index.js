// @flow
import * as React from "react";
import { connect } from "react-redux";
import { closeModal } from "state/ui/actionCreators";
import "./modal.scss";

type Props = {
  content: React.Node,
  closeModal: Function
};

const mapStateToProps = ({ UI }) => ({
  content: UI.modalContent
});

const mapDispatchToProps = {
  closeModal
};

export const notAuthorized = <p>Please sign in to use this feature.</p>;

const Modal = ({ content, closeModal }: Props) => (
  <div className="has-modal">
    <div className="modal" data-cy="modal">
      {content}
      <div className="modal-close" data-cy="modal-close" onClick={closeModal}>
        &times;
      </div>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
