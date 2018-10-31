require "test_helper"

class ApiRatingsTest < ActionDispatch::IntegrationTest
  test "GET /api/ratings (filter[id]) for a game" do
    user_game = create(:user_game, rating: 8)

    get api_ratings_path("filter[id]": user_game.game.id)
    response_body = JSON.parse(@response.body)

    assert_not_empty response_body

    assert_equal ["id", "score", "votes"], response_body.first.keys
    assert_equal 8.0, response_body.first["score"]
    assert_equal 1, response_body.first["votes"]
  end

  test "GET /api/ratings (filter[id]) for games" do
    user_game_1 = create(:user_game, rating: 8)
    user_game_2 = create(:user_game, rating: 10)

    get api_ratings_path("filter[id]": [user_game_1.game.id, user_game_2.game.id].join(","))
    response_body = JSON.parse(@response.body)

    assert_not_empty response_body
    assert_equal 2, response_body.size
    assert_equal ["id", "score", "votes"], response_body.first.keys
  end
end
