Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'auth#create'

  root "client#show"
end
