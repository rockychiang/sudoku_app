class GamesController < ApplicationController
  def ranking
    @leaderboard = Game.topten
    render json: @leaderboard
  end

  def create
    user = User.find_or_create_by(user_params)
    game = user.games.new(game_params)
    if game.save
      render json: game
    end
  end

  private
    def game_params
      params.require(:game).permit(:time, :initial_board, :current_board, :completed)
    end

    def user_params
      params.require(:user).permit(:username)
    end
end
