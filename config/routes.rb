Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :allotments do
    resources :bookings, only: :create
  end
  delete '/bookings/:id', to: 'bookings#destroy', as: 'booking'
  patch '/bookings/:id', to: 'bookings#approve'
  get '/bookings', to: 'bookings#index'
end
