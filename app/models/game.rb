class Game < ApplicationRecord
  belongs_to :user

  def self.topten
    Game.order(:time).limit(10)
  end
end
