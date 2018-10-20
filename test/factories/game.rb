FactoryBot.define do
  factory :game do
    transient do
      platforms { [:pc, :ps4, :nsw] }
    end

    igdb { rand(9999..999999) }
    name { Faker::Esport.game }
    cover { Faker::Placeholdit.image("249x374", "jpg") }

    after(:build) do |game, evaluator|
      evaluator.platforms.each do |platform|
        game.platforms << Platform.find_by(slug: platform.to_s.upcase)
      end
    end
  end
end
