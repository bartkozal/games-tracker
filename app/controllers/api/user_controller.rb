class Api::UserController < ApiController
  before_action :authorize

  def destroy
    current_user.destroy
  end
end
