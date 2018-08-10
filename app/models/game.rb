class Game < ApplicationRecord
  validates :igdb, uniqueness: true, presence: true
  validates :name, presence: true
  validates :cover, presence: true

  has_and_belongs_to_many :platforms

  def self.save_igdb_results(results)
    IGDB.parse(results).map do |game|
      saved_game = self.create_with(game).find_or_create_by(igdb: game[:igdb])
      saved_game.id
    end
  end

  def self.rating(id:, average:, count:)
    {
      id: id.to_i,
      score: average.to_f.round(1),
      votes: count
    }
  end
end
