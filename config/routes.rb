Rails.application.routes.draw do
  root 'pages#index'

  devise_for :users
  resources :users
  resources :works
  resources :vacancies
end
