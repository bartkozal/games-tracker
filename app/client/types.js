// @flow
export type Status = null | "wishlist" | "backlog" | "playing" | "completed";

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
  status?: Status,
  rating?: number,
  score?: number,
  votes?: number
};
