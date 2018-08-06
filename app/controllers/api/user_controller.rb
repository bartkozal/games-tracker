class Api::UserController < ApiController
  before_action :authenticate
end
