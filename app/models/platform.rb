class Platform < ApplicationRecord
  validates :igdb, uniqueness: true, presence: true
  validates :slug, uniqueness: true, presence: true
end
