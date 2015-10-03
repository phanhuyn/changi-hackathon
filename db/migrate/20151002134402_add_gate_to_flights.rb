class AddGateToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :gate, :string
  end
end
