require "test_helper"

class ApiUserGamesTest < ActionDispatch::IntegrationTest
  test "GET /api/user/games (filter[id])" do
    user_game_platforms = [Platform.find_by(slug: "PS4")]
    user_game = create(:user_game, status: :backlog, rating: 8.0, platforms: user_game_platforms)

    get api_user_games_path("filter[id]": user_game.game.id), headers: { Authorization: user_game.user.token }
    response_body = JSON.parse(@response.body)

    assert_not_empty response_body

    assert_equal ["id", "name", "cover", "platforms", "rating", "status", "userPlatforms"], response_body.first.keys
    assert_equal ["id", "slug"], response_body.first["platforms"].first.keys
    assert_equal "backlog", response_body.first["status"]
    assert_equal 8.0, response_body.first["rating"]
    assert_equal "PS4", response_body.first["userPlatforms"].first["slug"]
  end

  test "GET /api/user/games (filter[id]) for a game with no status" do
    user_game = create(:user_game, rating: 5.0)

    get api_user_games_path("filter[id]": user_game.game.id), headers: { Authorization: user_game.user.token }
    response_body = JSON.parse(@response.body)

    assert_equal "unassigned", response_body.first["status"]
    assert_equal 5.0, response_body.first["rating"]
    assert_equal [], response_body.first["userPlatforms"]
  end
end
