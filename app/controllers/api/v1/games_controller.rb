module Api::V1
  class GamesController < ApplicationController
    def index
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
        params.require(:game).permit(:time, :completed, :initial_board => [], :current_board => [])
      end

      def user_params
        params.require(:user).permit(:username)
      end
  end
end
