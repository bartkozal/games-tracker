class User < ApplicationRecord
  has_many :games, through: :user_games
end
