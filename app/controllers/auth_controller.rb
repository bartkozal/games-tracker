class AuthController < ApplicationController
  def create
    user = User.find_or_create_by(email: auth_hash.info.email)

    cookies[:auth] = {
      value: JSON.generate({
        token: user.token,
        email: user.email
      }),
      expires: 14.days
    }

    redirect_to root_path
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
