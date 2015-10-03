class AddAirlineCodeToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :airlineCode, :string
  end
end
