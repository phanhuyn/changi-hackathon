class AddDelayToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :delay, :datetime
  end
end
