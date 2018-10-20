require "test_helper"

class ApiRatingsTest < ActionDispatch::IntegrationTest
  include ApiTestHelper

  test "GET /api/ratings (filter[id])" do
    user_game = create(:user_game, rating: 8)

    get api_ratings_path("filter[id]": user_game.game.id)
    response_body = JSON.parse(@response.body)

    assert_not_empty response_body

    assert_equal ["id", "score", "votes"], response_body.first.keys
    assert_equal 8.0, response_body.first["score"]
    assert_equal 1, response_body.first["votes"]
  end

  test "GET /api/rating/:id" do
    # TODO remove - it's game id not rating id

    skip
    # get api_rating_path(Game.first.id)

    # response_body = JSON.parse(@response.body)
    # assert_equal ["id", "score", "votes"], response_body.keys
  end
end
