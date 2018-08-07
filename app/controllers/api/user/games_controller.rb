class Api::User::GamesController < Api::UserController
  def index
    games = UserGame.where(user: current_user).includes(:game)
    # TODO
    render json: games.to_json(include: [:game])
  end

  def update
    game = UserGame.find_or_create_by(user: current_user, game_id: params[:id])
    game.update(game_params)
    head 204
  end

  private

  def game_params
    params.require(:game).permit(:status, :rating)
  end
end
