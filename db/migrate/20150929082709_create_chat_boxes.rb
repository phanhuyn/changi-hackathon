class CreateChatBoxes < ActiveRecord::Migration
  def change
    create_table :chat_boxes do |t|
      t.datetime :open_time
      t.datetime :close_time
      t.references :flight, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
