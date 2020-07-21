module Proxy
  extend ActiveSupport::Concern

  IMG_KEY = [Rails.application.credentials.dig(:imgproxy, :key)].pack('H*')
  IMG_SALT = [Rails.application.credentials.dig(:imgproxy, :salt)].pack('H*')

  def proxy_image_url(key, mode, width, height)
    # bucket = Rails.env.production? ? :production : :develop
    path = "s3://#{Rails.application.credentials.dig(:aws, :bucket)}/#{key}"
    path = Base64.urlsafe_encode64(path).tr('=', '').scan(/.{1,16}/).join('/')
    # pp path
    url = "/rs:#{mode}:#{width}:#{height}:0/g:sm/#{path}.jpg"

    # digest = OpenSSL::Digest.new('sha256')
    # hmac = Base64.urlsafe_encode64(OpenSSL::HMAC.digest(digest, IMG_KEY, IMG_SALT + url)).tr('=', '')

    "#{Rails.application.credentials.dig(:imgproxy, :host)}/s3#{url}"
  end
end
