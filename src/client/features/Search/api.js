// import { get } from "axios";
import resultsResponse from "./__mocks__/resultsResponse";

export const getSearchResults = query =>
  Promise.resolve({
    data: resultsResponse
  });

// TODO
// get("/games/", {
//   baseURL: "https://api-endpoint.igdb.com",
//   headers: {
//     "user-key": process.env.IGDB_API_KEY
//   },
//   params: {
//     search: query,
//     fields: "name,platforms,platforms.slug,cover.cloudinary_id",
//     expand: "platforms",
//     order: "popularity:desc",
//     limit: 16,
//     "filter[version_parent][not_exists]": 1
//   }
// });
