Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # Rails.application.routes.draw do
    post '/reviews', to: 'reviews#create'
    put '/reviews/:id', to: 'reviews#update'
    delete '/reviews/:id', to: 'reviews#destroy'
    get '/reviews', to: 'reviews#index'
    get 'reviews/:id', to: 'reviews#show'

    resources :reviews
end
 

