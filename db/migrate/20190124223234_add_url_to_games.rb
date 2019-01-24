class AddUrlToGames < ActiveRecord::Migration[5.2]
  def change
    change_table :games do |t|
      t.string :url
    end
  end
end
