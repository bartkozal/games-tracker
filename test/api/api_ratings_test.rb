require "test_helper"

class ApiRatingsTest < ActionDispatch::IntegrationTest
  include ApiTestHelper

  # fixtures :user_games

  test "GET /api/ratings (filter[id])" do
    skip

    # TODO replace fixtures with factory bot

    get api_ratings_path("filter[id]": Game.first.id)
    response_body = JSON.parse(@response.body)

    assert_not_empty response_body

    response_body.each do |rating|
      assert_equal ["id", "score", "votes"], rating.keys
    end
  end

  test "GET /api/rating/:id" do
    # TODO remove - it's game id not rating it

    skip
    # get api_rating_path(Game.first.id)

    # response_body = JSON.parse(@response.body)
    # assert_equal ["id", "score", "votes"], response_body.keys
  end
end
