import { updateGame } from "./actionCreators";
import { statusType } from "./types";
import reducer, { initialState } from ".";

describe("Collection reducer", () => {
  test("updateGameCollection", () => {
    const action = updateGame({
      name: "Foo Bar",
      status: statusType.BACKLOG
    });
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({
      games: {
        fooBar: {
          name: "Foo Bar",
          status: statusType.BACKLOG
        }
      }
    });
  });
});
