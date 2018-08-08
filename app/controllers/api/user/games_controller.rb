class Api::User::GamesController < Api::UserController
  def index
    query = apply_optional_filters({ user: current_user }, id: :game_id)
    @user_games = UserGame.where(query).includes(:platforms, game: [:platforms])
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
