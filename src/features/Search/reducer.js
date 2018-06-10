import {
  QUERY_UPDATED,
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";

export const initialState = {
  query: "",
  isSearching: false,
  results: [
    {
      name: "The Witcher 3: Wild Hunt",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg",
      platforms: ["PC", "PS4", "XONE"]
    },
    {
      name: "The Witcher 2: Assassins of Kings",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg",
      platforms: ["PC", "MAC", "X360", "LIN"]
    },
    {
      name: "The Witcher",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/nrkdzmkevbbevdvm9bxh.jpg",
      platforms: ["PC", "MAC"]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUERY_UPDATED:
      return {
        ...state,
        query: action.payload.query
      };
    case RESULTS_REQUESTED:
      return {
        ...state,
        isSearching: true
      };
    case RESULTS_RESOLVED:
      return {
        ...state,
        isSearching: false,
        results: action.payload.results,
        query: ""
      };
    case RESULTS_REJECTED:
      return {
        ...state,
        isSearching: false,
        results: [],
        query: ""
      };
    default:
      return state;
  }
};
