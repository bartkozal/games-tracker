require "jwt"

class JsonWebToken
  def self.decode(token)
    JWT.decode(token, Rails.application.credentials.jwt, "HS256").first.with_indifferent_access
  end

  def self.encode(data)
    JWT.encode(data.merge({
      iat: Time.now.to_i
    }), Rails.application.credentials.jwt, "HS256")
  end
end
