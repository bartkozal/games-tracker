// @flow

export type Platform =
  | "PC" // 6
  | "MAC" // 14
  | "LIN" // 3
  | "PS4" // 48
  | "PS3" // 9
  | "XONE" // 49
  | "X360" // 12
  | "NSW"; // 130

export type GameStatus = "Wishlist" | "Backlog" | "Playing" | "Completed";

export type SearchResults = Array<{
  name: string,
  cover: string,
  platforms: Platform[]
}>;

export type CurrentUser = {
  email?: string
};
