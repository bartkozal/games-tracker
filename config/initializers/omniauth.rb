Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook,
    Rails.application.credentials[Rails.env.to_sym][:facebook][:app_id],
    Rails.application.credentials[Rails.env.to_sym][:facebook][:app_secret]
end
