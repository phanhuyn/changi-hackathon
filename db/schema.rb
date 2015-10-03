# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20151003091059) do

  create_table "chat_boxes", force: :cascade do |t|
    t.datetime "open_time"
    t.datetime "close_time"
    t.integer  "flight_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "chat_boxes", ["flight_id"], name: "index_chat_boxes_on_flight_id"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.string   "content",     null: false
    t.integer  "chat_box_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "comments", ["chat_box_id"], name: "index_comments_on_chat_box_id"
  add_index "comments", ["user_id"], name: "index_comments_on_user_id"

  create_table "flights", force: :cascade do |t|
    t.string   "number"
    t.datetime "scheduled"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "status"
    t.string   "aircraft"
    t.string   "city"
    t.string   "airportCode"
    t.string   "terminal"
    t.string   "adi"
    t.string   "airlineCode"
    t.datetime "delay"
    t.integer  "gate_id"
  end

  add_index "flights", ["gate_id"], name: "index_flights_on_gate_id"

  create_table "gates", force: :cascade do |t|
    t.string   "name"
    t.float    "longitude"
    t.float    "latitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string   "name"
    t.string   "tel"
    t.float    "longitude"
    t.float    "latitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "address"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
