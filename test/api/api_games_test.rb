require "test_helper"

class ApiGamesTest < ActionDispatch::IntegrationTest
  include IgdbTestHelper
  include ApiTestHelper

  test "GET /api/games (search)" do
    stub_response(%r(api-endpoint.igdb.com/games), 200, igdb_games_response_body)

    get api_games_path(search: "witcher")

    JSON.parse(@response.body).each do |game|
      assert_equal ["id", "name", "cover", "platforms"], game.keys

      game["platforms"].each do |platform|
        assert_equal ["id", "slug"], platform.keys
      end
    end
  end
end
