const getCoverUrl = (hash, size = "cover_big") =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;

const getPlatformName = slug => {
  const names = {
    win: "PC",
    mac: "MAC",
    linux: "LIN",
    "ps4--1": "PS4",
    xboxone: "XONE",
    xbox360: "X360",
    "nintendo-switch": "NSW"
  };
  return names[slug] || slug;
};

export const parseResults = results =>
  results.map(({ name, cover, platforms }) => ({
    name,
    cover: cover ? getCoverUrl(cover.cloudinary_id) : "",
    platforms: platforms
      ? platforms.map(platform => getPlatformName(platform.slug))
      : []
  }));
