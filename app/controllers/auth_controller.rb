class AuthController < ApplicationController
  def create
    user = User.find_or_create_by(email: auth_hash.info.email)

    cookies[:auth] = {
      value: JSON.generate({
        token: user.token,
        email: user.email
      }),
      expires: 30.years
    }

    redirect_to root_path
  end

  def cypress
    raise ActionController::RoutingError, "Not Found" if Rails.env.production?

    user = User.find_or_create_by(email: params[:email])
    render json: {
      token: user.token,
      email: user.email
    }
  end

  private

  def auth_hash
    request.env["omniauth.auth"]
  end
end
