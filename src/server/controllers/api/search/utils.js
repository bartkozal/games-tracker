import Platform from "../../../models/Platform";

const getCover = (hash, size = "cover_big") =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;

const getPlatforms = async igdbIds => {
  const platforms = await Platform.query().whereIn("igdb", igdbIds);

  return platforms.map(platform => ({
    id: platform.id,
    slug: platform.slug
  }));
};

export const parseSearchResults = async response => {
  const results = await Promise.all(
    response
      .filter(
        ({ platforms, cover }) => platforms && cover && cover.cloudinary_id
      )
      .map(async ({ name, cover, platforms, id }) => ({
        igdb: id,
        name,
        cover: getCover(cover.cloudinary_id),
        platforms: await getPlatforms(platforms)
      }))
  );

  return results.filter(({ platforms }) => platforms.length);
};
