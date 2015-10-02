require 'rufus-scheduler'

s = Rufus::Scheduler.singleton

s.every '1s' do
    Rails.logger.info "Hello, it's #{Time.now}"
    Rails.logger.flush
end
