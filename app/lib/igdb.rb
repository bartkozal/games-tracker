class IGDB
  def self.query(query)
    Typhoeus.get(
      "https://api-endpoint.igdb.com/games/",
      params: {
        search: query,
        fields: "name,platforms,cover.cloudinary_id",
        order: "popularity:desc",
        limit: 12,
        "filter[platforms][any]": "6,48,9,49,12,130"
      },
      headers: { "user-key": Rails.application.credentials.igdb }
    )
  end

  def self.parse(body)
    # TODO
    # body
  end
end
