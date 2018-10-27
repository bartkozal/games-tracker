// @flow

export type Platform = {
  id: number,
  slug: string
};

export type Game = {
  id: number,
  name: string,
  cover: string,
  platforms: Platform[],
  userPlatforms?: Platform[],
  status?: "wishlist" | "backlog" | "playing" | "completed",
  rating?: number,
  score?: number,
  votes?: number
};
