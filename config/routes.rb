Rails.application.routes.draw do
  get '/leaderboard' => 'games#ranking'

  resources :games, only: :create
end
