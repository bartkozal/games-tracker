json.array! @user_games do |user_game|
  game = user_game.game
  json.(game, :id, :name, :cover)
  json.platforms game.platforms do |platform|
    json.(platform, :id, :slug)
  end
  json.(user_game, :rating, :status)
  json.userPlatforms user_game.platforms do |platform|
    json.(platform, :id, :slug)
  end
end