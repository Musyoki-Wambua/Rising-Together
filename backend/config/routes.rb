Rails.application.routes.draw do
  resources :volunteers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # Rails.application.routes.draw do
    # post '/reviews', to: 'reviews#create'
    #  put '/reviews/:id', to: 'reviews#update'
    #  delete '/reviews/:id', to: 'reviews#destroy'
    # get '/reviews', to: 'reviews#index'
    # get 'reviews/:id', to: 'reviews#show'

     resources :reviews
     resources :donations
     resources :organizations
     resources :user,only: [:index, :create, :destroy]
     resources :profile, expects: [:index]


    # post '/donations', to: 'donations#create'
    # put '/donations/:id', to: 'donations#update'
    # delete '/donations/:id', to: 'donations#destroy'
    # get '/donations', to: 'donations#index'
    # get 'donations/:id', to: 'donations#show'

end
 

