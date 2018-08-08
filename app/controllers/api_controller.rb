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

  def apply_optional_filters(query, filters)
    filters.each do |filter, key|
      if params[:filter] && values = params[:filter][filter]
        query.merge!(Hash[key, values.split(',')])
      end
    end

    query
  end

  private

  def token
    request.headers["Authorization"]&.split(" ")&.last
  end
end
