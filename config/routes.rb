Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:index, :show, :update, :create, :destroy]
  resources :dogs, only: [:index, :show, :update, :create, :destroy]
  resources :dog_parks, only: [:index, :show]
  resources :check_ins, only: [:index, :show, :create, :destroy]

  get "/users_dogs/:id", to: "dogs#show_users_dogs"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
