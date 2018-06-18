class Game < ApplicationRecord
  belongs_to :user
  serialize [:initial_board, :current_board], Array
end
