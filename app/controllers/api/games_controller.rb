class Api::GamesController < ApiController
  def index
    response = IGDB.query(params[:search])
    data = JSON.parse(response.body)
    games = Game.save_igdb_results(data)

    # TODO
    render json: games.to_json(
      except: [:created_at, :updated_at, :igdb],
      include: {
        platforms: {
          except: [:created_at, :updated_at, :igdb]
        }
      }
    )
  end
end
