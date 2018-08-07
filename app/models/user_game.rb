class UserGame < ApplicationRecord
  belongs_to :user
  belongs_to :game
  has_and_belongs_to_many :platforms

  enum status: [:wishlist, :backlog, :playing, :completed]
end
