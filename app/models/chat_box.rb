class ChatBox < ActiveRecord::Base
  belongs_to :flight, required: true
  has_many :comments
end
