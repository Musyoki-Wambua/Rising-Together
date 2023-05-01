Rails.application.routes.draw do
  mount Rswag::Api::Engine => '/api-docs'

  resources :volunteers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # Rails.application.routes.draw do

  # mount Rswag::Ui::Engine => '/api-docs'
  # mount Rswag::Api::Engine => '/api-docs'
    # post '/reviews', to: 'reviews#create'
    #  put '/reviews/:id', to: 'reviews#update'
    #  delete '/reviews/:id', to: 'reviews#destroy'
    # get '/reviews', to: 'reviews#index'
    # get 'reviews/:id', to: 'reviews#show'

     resources :reviews
     resources :donations
     resources :organizations
     resources :users ,only: [:index, :create, :destroy]
     resources :profiles, expects: [:index]


    # post '/donations', to: 'donations#create'
    # put '/donations/:id', to: 'donations#update'
    # delete '/donations/:id', to: 'donations#destroy'
    # get '/donations', to: 'donations#index'
    # get 'donations/:id', to: 'donations#show'

end
 
