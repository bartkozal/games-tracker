FactoryBot.define do
  factory :platform do
    # slug string
    igdb { rand(1..200) }
  end
end
