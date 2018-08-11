Rails.application.routes.draw do
  # www to non-www redirect
  match "(*any)",
    to: redirect(subdomain: ""), via: :all, constraints: { subdomain: "www" }

  namespace :api, defaults: { format: :json } do
    namespace :user do
      resources :games, only: [:index, :update]
    end

    resources :games, only: [:index]
    resources :ratings, only: [:index, :show]
  end

  get "/auth/:provider/callback", to: "auth#create"

  get "/me", to: "client#show"
  root "client#show"
end
