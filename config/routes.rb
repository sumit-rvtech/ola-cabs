Rails.application.routes.draw do
  resources :bookings
  root 'welcome#index'
  
  get '/users/new_driver', to: 'users#new_driver', as: 'new_driver'
  get '/users/drivers', to: 'users#drivers', as: 'drivers'
  post '/users/search_drivers', to: 'users#search_drivers', as: 'search_drivers'
  # resources :users do
  # 	collection do
  # 		#get 'new_driver'
  # 	end
  # end


  devise_for :users, controllers: { registrations: 'users/registrations', sessions: 'users/sessions'} do
  	
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
