require_relative "../../../test/test_helpers/igdb_test_helper"

class Api::GamesController < ApiController
  include IgdbTestHelper

  def index
    if Rails.env.test? || Rails.env.cypress?
      response_body = igdb_games_response_body
    else
      response_body = IGDB.query(params[:search]).body
    end

    data = JSON.parse(response_body)
    ids = Game.save_igdb_results(data)
    @games = Game.where(id: ids).includes(:platforms)
  end
end
