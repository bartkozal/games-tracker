import { GAME_COLLECTION_UPDATED } from "./actionTypes";

export const collectionType = {
  WISHLIST: "wishlist",
  BACKLOG: "backlog",
  PLAYING: "playing",
  COMPLETED: "completed"
};

const initialState = {
  collection: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_COLLECTION_UPDATED:
      return {
        ...state,
        collection: [
          ...state.collection,
          {
            ...action.payload.game,
            userGameCollection: action.payload.collection
          }
        ]
      };
    default:
      return state;
  }
};
