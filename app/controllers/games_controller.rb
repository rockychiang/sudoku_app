class GamesController < ApplicationController
  def ranking
    @leaderboard = Game.topten
    render json: @leaderboard
  end

  def create
  end
end
