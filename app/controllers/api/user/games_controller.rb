class Api::User::GamesController < Api::UserController
  def index
    query = apply_optional_filters({ user: current_user }, id: :game_id)
    @user_games = UserGame.where(query).includes(:platforms, game: [:platforms])
  end

  def update
    user_game = UserGame.find_or_create_by(
      user: current_user,
      game_id: params[:id]
    )

    if platforms = user_game_params[:platforms]
      user_game.platforms = platforms.map do |id|
        Platform.find(id)
      end
      user_game.save
    else
      user_game.update(user_game_params)
    end

    head 204
  end

  private

  def user_game_params
    params.require(:game).permit(:status, :rating, platforms: [])
  end
end
