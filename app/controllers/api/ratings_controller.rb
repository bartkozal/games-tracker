class Api::RatingsController < ApiController
  def index
    conditions = apply_filters({ game_id: :id })
    averages = UserGame.where(conditions).group(:game_id).average(:rating)
    counts = UserGame.where(conditions).group(:game_id).count(:rating)

    @ratings = counts.map do |game_id, count|
      Game.rating({
        id: game_id,
        count: count,
        average: averages[game_id]
      })
    end
  end
end
