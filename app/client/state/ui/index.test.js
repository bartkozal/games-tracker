import React from "react";
import { openModal, closeModal } from "./actionCreators";
import reducer, { initialState } from "./";

describe("Search", () => {
  test("MODAL_OPENED", () => {
    const action = openModal(<p>Modal content</p>);
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchSnapshot();
  });

  test("MODAL_CLOSED", () => {
    const action = closeModal();
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchSnapshot();
  });
});
