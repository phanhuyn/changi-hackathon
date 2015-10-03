class Flight < ActiveRecord::Base
    has_one :chat_box
    belongs_to :gate
    def as_json(option=nil)
        super(:include => [:gate, :chat_box])
    end
end
