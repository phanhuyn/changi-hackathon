class ChatBox < ActiveRecord::Base
  belongs_to :flight, required: true
end
