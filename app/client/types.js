import PropTypes from "prop-types";

export const Status = {
  WISHLIST: "wishlist",
  BACKLOG: "backlog",
  PLAYING: "playing",
  COMPLETED: "completed"
};

export const Platform = PropTypes.shape({
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
});

export const Game = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(Platform).isRequired,
  userPlatforms: PropTypes.arrayOf(Platform),
  status: PropTypes.oneOf([
    Status.WISHLIST,
    Status.BACKLOG,
    Status.PLAYING,
    Status.COMPLETED
  ]),
  rating: PropTypes.number,
  score: PropTypes.number,
  votes: PropTypes.number
});
