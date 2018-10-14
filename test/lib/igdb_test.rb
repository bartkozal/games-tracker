require "test_helper"

class IgdbTest < ActiveSupport::TestCase
  include IgdbTestHelper

  fixtures :platforms

  test ".parse" do
    expected = [
      {
        name: "The Witcher 3: Wild Hunt",
        cover:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg",
        platforms: [platforms(:pc), platforms(:ps4), platforms(:xone)],
        igdb: 1942
      },
      {
        name: "The Witcher 2: Assassins of Kings",
        cover:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg",
        platforms: [platforms(:pc), platforms(:x360)],
        igdb: 478
      },
      {
        name: "The Witcher",
        cover:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/nrkdzmkevbbevdvm9bxh.jpg",
        platforms: [platforms(:pc)],
        igdb: 80
      }
    ]

    igdb_games_json = JSON.parse(igdb_games_response_body)
    returned_value = IGDB.parse(igdb_games_json)

    assert_equal 3, returned_value.size
    assert_equal expected, returned_value
  end
end
