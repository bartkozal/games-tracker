class InitDatabase < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.timestamps
      t.string :email
    end

    create_table :games do |t|
      t.integer :igdb
      t.string :name
      t.string :cover
      t.timestamps
    end

    create_table :platforms do |t|
      t.integer :igdb
      t.string :slug
      t.timestamps
    end

    create_join_table :users, :games do |t|
      t.integer :rating
      t.integer :status
      t.timestamps
    end

    create_join_table :games, :platforms do |t|
      t.timestamps
    end

    create_join_table :user_games, :platforms do |t|
      t.timestamps
    end
  end
end
