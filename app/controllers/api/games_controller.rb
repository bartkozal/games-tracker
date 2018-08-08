class Api::GamesController < ApiController
  def index
    response = IGDB.query(params[:search])
    data = JSON.parse(response.body)
    ids = Game.save_igdb_results(data)

    @games = Game.where(id: ids).includes(:platforms)
  end
end
