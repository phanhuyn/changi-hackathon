class Flight < ActiveRecord::Base
    has_one :chat_box
    belongs_to :gate
end
