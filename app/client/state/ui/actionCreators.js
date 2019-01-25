import { MODAL_OPENED, MODAL_CLOSED } from "./actionTypes";

export const openModal = content => ({
  type: MODAL_OPENED,
  payload: {
    content
  }
});

export const closeModal = () => ({
  type: MODAL_CLOSED
});
