import { compact } from "lodash";

const getCoverUrl = (hash, size = "cover_big") =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;

const mapPlatformName = ({ slug }) => {
  const names = {
    win: "PC", // 6
    mac: "MAC", // 14
    linux: "LIN", // 3
    "ps4--1": "PS4", // 48
    ps3: "PS3", // 9
    xboxone: "XONE", // 49
    xbox360: "X360", // 12
    "nintendo-switch": "NSW" // 130
  };
  return names[slug];
};

export const transformSearchResults = searchResults =>
  searchResults.map(({ name, cover, platforms }) => ({
    name,
    cover: cover ? getCoverUrl(cover.cloudinary_id) : "",
    platforms: compact(platforms.map(mapPlatformName))
  }));
