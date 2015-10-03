class ChatBox < ActiveRecord::Base
  belongs_to :flight, required: true
  has_many :comments
  before_create :set_time_to_now
  def set_time_to_now
    self.open_time=Time.now
    self.close_time=Time.now
  end
end
