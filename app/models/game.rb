class Game < ApplicationRecord
  validates :igdb, uniqueness: true, presence: true
  validates :name, presence: true
  validates :cover, presence: true

  has_and_belongs_to_many :platforms

  def self.save_igdb_results(results)
    games = IGDB.parse(results)

    ids = games.map do |game|
      saved_game = self.create_with(game).find_or_create_by(igdb: game[:igdb])
      saved_game.id
    end

    self.where(id: ids).includes(:platforms)
  end
end
