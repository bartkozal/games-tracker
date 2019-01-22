class UserGame < ApplicationRecord
  belongs_to :user
  belongs_to :game
  has_and_belongs_to_many :platforms

  enum status: [:wishlist, :backlog, :playing, :completed]

  after_save :touch_status_updated_at, if: :saved_change_to_status?

  def destroy_if_no_attributes
    if platforms.empty? && rating.nil? && status.nil?
      destroy
    end
  end

  private

  def touch_status_updated_at
    touch(:status_updated_at)
  end
end
