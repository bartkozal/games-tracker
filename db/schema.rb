# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_24_223234) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.integer "igdb"
    t.string "name"
    t.string "cover"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "url"
  end

  create_table "games_platforms", id: false, force: :cascade do |t|
    t.bigint "game_id", null: false
    t.bigint "platform_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "platforms", force: :cascade do |t|
    t.integer "igdb"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "platforms_user_games", id: false, force: :cascade do |t|
    t.bigint "user_game_id", null: false
    t.bigint "platform_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_games", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "game_id"
    t.integer "rating"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "status_updated_at"
    t.index ["game_id"], name: "index_user_games_on_game_id"
    t.index ["user_id"], name: "index_user_games_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
  end

  add_foreign_key "user_games", "games"
  add_foreign_key "user_games", "users"
end
