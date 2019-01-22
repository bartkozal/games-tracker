class AddStatusUpdatedAtToUserGames < ActiveRecord::Migration[5.2]
  def change
    change_table :user_games do |t|
      t.datetime :status_updated_at
    end
  end
end
