class Api::StaticPagesController < ApiController
  layout "static_pages"

  def show
    render "static_pages/#{params[:id]}"
  end
end
