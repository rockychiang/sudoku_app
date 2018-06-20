Rails.application.routes.draw do
  namespace :api do
    get '/leaderboard' => 'games#ranking'

    resources :games, only: :create
  end
end
