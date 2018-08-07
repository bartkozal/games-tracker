class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true

  has_many :user_games
  has_many :games, through: :user_games

  def self.authenticate(token)
    decoded = JsonWebToken.decode(token)
    User.find(decoded[:id])
  end

  def token
    JsonWebToken.encode({ id: id })
  end
end
