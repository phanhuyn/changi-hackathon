class AddDetailsToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :adi, :string
  end
end
