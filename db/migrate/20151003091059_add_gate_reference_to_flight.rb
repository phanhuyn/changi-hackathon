class AddGateReferenceToFlight < ActiveRecord::Migration
  def change
    remove_column :flights, :gate, :string
    add_reference :flights, :gate, index: true, foreign_key: true
  end
end
