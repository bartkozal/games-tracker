require "jwt"

class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true

  has_many :games, through: :user_games

  def self.authenticate(token)
    jwt = JWT.decode(token, Rails.application.credentials.jwt, "HS256")
    User.find(jwt.id)
  end

  def token
    JWT.encode({
      id: id,
      iat: Time.now.to_i
    }, Rails.application.credentials.jwt, "HS256")
  end
end
