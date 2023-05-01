Rails.application.routes.draw do

  resources :profiles
  resources :reviews
  resources :donations
  resources :organizations
  resources :users, only: [:index, :create, :destroy]
  #Register a new user
  post '/users/signup', to: 'users#signup'
  post '/users/login', to: 'users#login'
  delete 'users/logout', to: 'users#destroy'
  post 'sessions/signup', to: 'sessions#sessions'

    
end
 

