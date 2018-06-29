// @flow
import { compact } from "lodash";

const getCoverUrl = (hash: string, size: string = "cover_big"): string =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;

const mapPlatformName = (id: number): Platform => {
  const platformNames = {
    "6": "PC",
    "14": "MAC",
    "3": "LIN",
    "48": "PS4",
    "9": "PS3",
    "49": "XONE",
    "12": "X360",
    "130": "NSW"
  };

  return platformNames[`${id}`];
};

type IGDBSearch = Array<{
  id: number,
  name: string,
  platforms: number[],
  cover: {
    cloudinary_id: string
  }
}>;

export const transformSearchResults = (
  searchResults: IGDBSearch
): SearchResults =>
  searchResults
    .filter(({ platforms, cover }) => platforms && cover && cover.cloudinary_id)
    .map(({ name, cover, platforms }) => ({
      name,
      cover: cover ? getCoverUrl(cover.cloudinary_id) : "",
      platforms: compact(platforms.map(mapPlatformName))
    }))
    .filter(({ platforms }) => platforms.length);
