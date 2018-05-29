import {
  UPDATE_QUERY,
  REQUEST_RESULTS,
  RESOLVE_RESULTS,
  REJECT_RESULTS
} from "./actionTypes";

export const initialState = {
  query: "",
  isSearching: false,
  results: [
    {
      name: "Max Payne",
      cover:
        "https://www.giantbomb.com/api/image/scale_avatar/2737109-maxpayne.jpg",
      platforms: [
        "GBA",
        "MAC",
        "PS2",
        "XBOX",
        "XBGS",
        "PS3N",
        "PC",
        "IPHN",
        "IPAD",
        "ANDR",
        "PS4"
      ]
    },
    {
      name: "Max Payne 3",
      cover:
        "https://www.giantbomb.com/api/image/scale_avatar/2737108-maxpayne3.jpg",
      platforms: ["MAC", "X360", "PS3", "XBGS", "PS3N", "PC"]
    },
    {
      name: "Max Payne 2: The Fall of Max Payne",
      cover:
        "https://www.giantbomb.com/api/image/scale_avatar/2737112-maxpayne2.jpg",
      platforms: ["PS2", "XBOX", "PC"]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload.query
      };
    case REQUEST_RESULTS:
      return {
        ...state,
        isSearching: true
      };
    case RESOLVE_RESULTS:
      return {
        ...state,
        isSearching: false,
        results: action.payload.results,
        query: ""
      };
    case REJECT_RESULTS:
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
