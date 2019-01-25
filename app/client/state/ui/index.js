import { MODAL_OPENED, MODAL_CLOSED } from "./actionTypes";
import { notAuthorized } from "ui/components/Modal";

export const initialState = {
  isModalOpen: true,
  modalContent: notAuthorized
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPENED:
      return {
        ...state,
        isModalOpen: true,
        modalContent: action.payload.content
      };
    case MODAL_CLOSED:
      return {
        ...state,
        isModalOpen: false,
        modalContent: null
      };
    default:
      return state;
  }
};
