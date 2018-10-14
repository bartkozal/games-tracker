require "test_helper"

class ApiRatingsTest < ActionDispatch::IntegrationTest
  include ApiTestHelper

  test "GET /api/ratings (filter[id])" do
    # get api_ratings_path("filter[id]": "1,2,3")

    # assert_equal 2, @response.body
    skip
  end
end
