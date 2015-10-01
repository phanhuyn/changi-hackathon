class AddFlightInfo < ActiveRecord::Migration
  def change
      add_column :flights, :status, :string
      add_column :flights, :aircraft, :string
      add_column :flights, :city, :string
      add_column :flights, :airportCode, :string
      add_column :flights, :terminal, :string
  end
end
