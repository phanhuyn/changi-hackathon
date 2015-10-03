class Comment < ActiveRecord::Base
  belongs_to :user, required: true
  belongs_to :chat_box, required: true
end
