class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  attr_reader :current_user

  protected

  def authenticate
    if token
      @current_user = User.authenticate(token)
    else
      head :forbidden
    end
  end

  private

  def token
    request.headers["Authorization"]&.split(" ")&.last
  end
end
