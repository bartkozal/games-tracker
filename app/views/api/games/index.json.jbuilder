json.array! @games do |game|
  json.(game, :id, :name, :cover)
  json.platforms game.platforms do |platform|
    json.(platform, :id, :slug)
  end
end
