class RemoveGateFromFlight < ActiveRecord::Migration
  def change
    remove_column :flights, :gate, :string
  end
end
