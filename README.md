# Games Tracker [![Build Status](https://semaphoreci.com/api/v1/projects/4040781d-ddc7-46de-aa23-c39a472396e1/2049517/shields_badge.svg)](https://semaphoreci.com/games-tracker/games-tracker)

## Dependencies

- Ruby 2.5.1
- Node 9.11.1
- PostgreSQL 10.4

## Development

```sh
$ brew install hivemind
$ bundle install
$ yarn install
$ rails db:setup
$ yarn start
```

## Test

```sh
$ rails test
$ yarn test
$ yarn cypress
```

## Deployment

Master branch is auto-deployed to Heroku.
