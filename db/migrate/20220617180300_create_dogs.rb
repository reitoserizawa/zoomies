class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.string :age
      t.string :size
      t.string :img
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
