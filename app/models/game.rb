class Game < ApplicationRecord
  belongs_to :user
  serialize [:initial_board, :current_board], Array

  def self.topten()
    Game.order(:time).limit(10)
  end
end
