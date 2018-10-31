json.array! @ratings do |rating|
  json.(rating, :id, :score, :votes)
end
