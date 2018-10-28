if @ratings.size > 1
  json.array! @ratings do |rating|
    json.(rating, :id, :score, :votes)
  end
else
  json.(@ratings.first, :id, :score, :votes)
end
