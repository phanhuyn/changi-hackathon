class Flight < ActiveRecord::Base
    has_one :chat_box
    has_one :gate
end
