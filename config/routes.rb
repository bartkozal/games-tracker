Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :user do
      resources :games, only: [:index, :update]
    end

    resources :games, only: [:index]
    resources :ratings, only: [:index, :show]
  end

  get "/auth/:provider/callback", to: "auth#create"
  get "/auth/cypress/", to: "auth#cypress"
  root "client#show"
end
