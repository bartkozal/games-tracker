import { updateGameCollection } from "./actionCreators";
import reducer, { initialState, collectionType } from ".";

describe("Collection reducer", () => {
  test("updateGameCollection", () => {
    const action = updateGameCollection(
      { name: "Foo" },
      collectionType.BACKLOG
    );
    const returnedState = reducer(initialState, action);

    expect(returnedState.collection).toContainEqual({
      name: "Foo",
      userGameCollection: collectionType.BACKLOG
    });
  });
});
