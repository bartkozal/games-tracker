export const parseResults = results =>
  results.map(({ name, image, platforms }) => ({
    name,
    cover: image.thumb_url,
    platforms: platforms.map(platform => platform.abbreviation)
  }));
