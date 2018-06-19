class GamesController < ApplicationController
  def ranking
    @leaderboard = Game.topten
    render json: @leaderboard
  end

  def create
    user = User.find_or_create_by(username: params[:username])
    game = user.games.new(game_params)
    render json: game
  end

  private
    def game_params
      params.require(:game).permit(:time, :initial_board, :current_board, :completed)
    end

end
