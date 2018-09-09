class Api::User::GamesController < Api::UserController
  def index
    conditions = apply_filters({ game_id: :id }, { user: current_user })
    @user_games = UserGame.where(conditions).includes(:platforms, game: [:platforms])
  end

  def update
    user_game = UserGame.find_or_create_by(
      user: current_user,
      game_id: params[:id]
    )

    user_game.transaction do
      if platforms = user_game_params[:platforms]
        user_game.update(platforms: Platform.where(id: platforms))
      else
        user_game.update(user_game_params)
      end

      user_game.destroy_if_no_attributes
    end

    head 204
  end

  private

  def user_game_params
    params.require(:game).permit(:status, :rating, platforms: [])
  end
end
