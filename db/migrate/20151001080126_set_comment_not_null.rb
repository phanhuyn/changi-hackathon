class SetCommentNotNull < ActiveRecord::Migration
  def change
    change_column_null :comments, :content, false
    change_column_null :comments, :user_id, false
    change_column_null :comments, :chat_box_id, false
  end
end
