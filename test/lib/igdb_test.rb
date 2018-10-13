require "test_helper"

class IgdbTest < ActiveSupport::TestCase
  fixtures :platforms

  test ".parse" do
    results = [
      {
        "id" => 1942,
        "name" => "The Witcher 3: Wild Hunt",
        "platforms" => [6, 48, 49],
        "cover" => {
          "cloudinary_id" => "tri1c6vbydeosoqajwt1"
        }
      },
      {
        "id" => 478,
        "name" => "The Witcher 2: Assassins of Kings",
        "platforms" => [6, 12, 3],
        "cover" => {
          "cloudinary_id" => "mcou7xzxq0qnerehesrh"
        }
      },
      {
        "id" => 80,
        "name" => "The Witcher",
        "platforms" => [6, 0],
        "cover" => {
          "cloudinary_id" => "nrkdzmkevbbevdvm9bxh"
        }
      },
      {
        "id" => 1074,
        "name" => "Game without supported platform",
        "platforms" => [4, 41, 47, 5],
        "cover" => {
          "cloudinary_id" => "scutr4p9gytl4txb2soy"
        }
      },
      {
        "id" => 95001,
        "name" => "Game without platforms",
        "cover" => {
          "cloudinary_id" => "yrmbn0bixlihll7uetmu"
        }
      },
      {
        "id" => 1942,
        "name" => "Game without cover",
        "platforms" => [6, 48, 49]
      }
    ]

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

    returned_value = IGDB.parse(results)

    assert_equal 3, returned_value.size
    assert_equal expected, returned_value
  end
end
