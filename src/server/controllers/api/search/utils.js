// @flow
import { compact } from "lodash";

const getCoverUrl = (hash: string, size: string = "cover_big"): string =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;

const mapPlatformName = ({ slug }: { slug: string }): Platform => {
  const platformNames = {
    win: "PC",
    mac: "MAC",
    linux: "LIN",
    "ps4--1": "PS4",
    ps3: "PS3",
    xboxone: "XONE",
    xbox360: "X360",
    "nintendo-switch": "NSW"
  };

  return platformNames[slug];
};

type IGDBSearch = Array<{
  id: number,
  name: string,
  platforms: Array<{
    id: number,
    slug: string
  }>,
  cover: {
    cloudinary_id: string
  }
}>;

export const transformSearchResults = (
  searchResults: IGDBSearch
): SearchResults =>
  searchResults
    .filter(({ platforms }) => platforms)
    .map(({ name, cover, platforms }) => ({
      name,
      cover: cover ? getCoverUrl(cover.cloudinary_id) : "",
      platforms: compact(platforms.map(mapPlatformName))
    }))
    .filter(({ platforms }) => platforms.length);
