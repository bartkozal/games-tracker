require "test_helper"

class IgdbTest < ActiveSupport::TestCase
  include IgdbTestHelper

  test ".parse" do
    expected = [
      {
        name: "The Witcher 3: Wild Hunt",
        cover:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg",
        platforms: [
          Platform.find_by(slug: "PC"),
          Platform.find_by(slug: "PS4"),
          Platform.find_by(slug: "XONE")
        ],
        igdb: 1942
      },
      {
        name: "The Witcher 2: Assassins of Kings",
        cover:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg",
        platforms:  [
          Platform.find_by(slug: "PC"),
          Platform.find_by(slug: "X360"),
        ],
        igdb: 478
      },
      {
        name: "The Witcher",
        cover:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/nrkdzmkevbbevdvm9bxh.jpg",
        platforms: [
          Platform.find_by(slug: "PC"),
        ],
        igdb: 80
      }
    ]

    igdb_games_json = JSON.parse(igdb_games_response_body)
    returned_value = IGDB.parse(igdb_games_json)

    assert_equal 3, returned_value.size
    assert_equal expected, returned_value
  end
end
