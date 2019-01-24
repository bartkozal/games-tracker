json.array! @user_games do |user_game|
  game = user_game.game
  json.(game, :id, :name, :url, :cover)
  json.platforms game.platforms do |platform|
    json.(platform, :id, :slug)
  end
  json.rating user_game.rating
  json.status user_game.status
  json.userPlatforms user_game.platforms do |platform|
    json.(platform, :id, :slug)
  end
end
