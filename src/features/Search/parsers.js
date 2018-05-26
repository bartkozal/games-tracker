export const parseResults = results =>
  results.map(({ name, image, platforms }) => ({
    name,
    cover: image.small_url,
    platforms: platforms.map(platform => platform.abbreviation)
  }));
