// @flow
import * as React from "react";
import { connect } from "react-redux";
import { closeModal } from "state/ui/actionCreators";
import { FacebookButton } from "../Button";
import "./modal.scss";

type Props = {
  isModalOpen: boolean,
  content: React.Node,
  closeModal: Function
};

const mapStateToProps = ({ UI }) => ({
  isModalOpen: UI.isModalOpen,
  content: UI.modalContent
});

const mapDispatchToProps = {
  closeModal
};

export const notAuthorized = (
  <div>
    <p>You have to be signed in to use this feature.</p>
    <FacebookButton />
  </div>
);

const Modal = ({ isModalOpen, content, closeModal }: Props) => {
  // $FlowFixMe
  const modalEl = React.useRef(null);

  const handleBackdropClick = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    if (!modalEl.current.contains(event.target)) closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="has-modal" onClick={handleBackdropClick}>
      <div className="modal" data-cy="modal" ref={modalEl}>
        {content}
        <div className="modal-close" data-cy="modal-close" onClick={closeModal}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
