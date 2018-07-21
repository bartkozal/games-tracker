import { compact } from "lodash";

const getCover = (hash, size = "cover_big") =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;

const mapPlatformName = id => {
  const platformNames = {
    6: "PC",
    14: "MAC",
    3: "LIN",
    48: "PS4",
    9: "PS3",
    49: "XONE",
    12: "X360",
    130: "NSW"
  };

  return platformNames[id];
};

export const parseSearchResults = response =>
  response
    .filter(({ platforms, cover }) => platforms && cover && cover.cloudinary_id)
    .map(({ name, cover, platforms, id: igdbId }) => ({
      igdbId,
      name,
      cover: getCover(cover.cloudinary_id),
      platforms: compact(platforms.map(mapPlatformName))
    }))
    .filter(({ platforms }) => platforms.length);
