module ApiTestHelper
  def stub_response(endpoint, code, body)
    response = Typhoeus::Response.new(code: code, body: body)
    Typhoeus.stub(endpoint).and_return(response)
  end
end
