class IGDB
  def self.query(query)
    Typhoeus.get(
      "https://api-endpoint.igdb.com/games/",
      params: {
        search: query,
        fields: "name,platforms,cover.cloudinary_id,url",
        limit: 12,
        "filter[platforms][any]": "6,48,9,49,12,130"
      },
      headers: { "user-key": Rails.application.credentials.igdb }
    )
  end

  def self.parse(data)
    data.select do |game|
      game["platforms"] && game["cover"] && game["cover"]["cloudinary_id"] && game["url"]
    end.map do |game|
      {
        igdb: game["id"],
        name: game["name"],
        url: game["url"],
        cover: cover(game["cover"]["cloudinary_id"]),
        platforms: platforms(game["platforms"])
      }
    end.select do |game|
      game[:platforms].size > 0
    end
  end

  private

  def self.cover(hash, size = "cover_big")
    "https://images.igdb.com/igdb/image/upload/t_#{size}/#{hash}.jpg"
  end

  def self.platforms(igdb_ids)
    @@platforms ||= Platform.all

    igdb_ids.map do |id|
      @@platforms.find_by(igdb: id)
    end.compact
  end
end
