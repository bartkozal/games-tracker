class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  attr_reader :current_user

  protected

  def authorize
    if token
      @current_user = User.authenticate(token)
    else
      head :forbidden
    end
  end

  def apply_filters(filters, conditions = {})
    filters.each do |column, filter|
      if params[:filter] && values = params[:filter][filter]
        conditions.merge!(Hash[column, values.split(",")])
      end
    end

    conditions
  end

  private

  def token
    request.headers["Authorization"]&.split(" ")&.last
  end
end
