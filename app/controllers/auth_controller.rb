class AuthController < ApplicationController
  def create
    User.find_or_create_by(email: auth_hash.info.email)
    redirect_to '/'
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
