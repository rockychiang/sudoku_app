class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :time
      t.text :initial_board, array: true, default: []
      t.text :current_board, array: true, default: []
      t.boolean :completed

      t.timestamps
    end
  end
end
