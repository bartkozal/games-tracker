FactoryBot.define do
  factory :user_game do
    user
    game
    # rating maybe(1-10)
    # status maybe([:wishlist, :backlog, :playing, :completed])
    # platforms maybe(platform[])
  end
end
