class CreateDogParks < ActiveRecord::Migration[7.0]
  def change
    create_table :dog_parks do |t|
      t.string :name
      t.string :address
      t.string :img
      t.integer :capacity

      t.timestamps
    end
  end
end
