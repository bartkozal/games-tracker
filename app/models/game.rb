class Game < ApplicationRecord
  has_and_belongs_to_many :platforms

  def self.save_igdb_results(results)
    # TODO
    # IGDB.parse(results)
  end
end
