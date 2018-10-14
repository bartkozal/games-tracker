ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

Dir[Rails.root.join('test', 'test_helpers', '*.rb')].each do |test_helper|
  require test_helper
end

class ActionDispatch::IntegrationTest
  def setup
    Typhoeus::Expectation.clear
  end
end
