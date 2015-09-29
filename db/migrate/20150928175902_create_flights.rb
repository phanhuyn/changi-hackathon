class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :number
      t.datetime :scheduled

      t.timestamps null: false
    end
  end
end
