class ChangeChatBoxColumNotNull < ActiveRecord::Migration
  def change
    change_column_null :chat_boxes, :flight_id, false
  end
end
