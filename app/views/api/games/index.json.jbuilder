json.array! @games do |game|
  json.(game, :id, :name, :url, :cover)
  json.platforms game.platforms do |platform|
    json.(platform, :id, :slug)
  end
end
