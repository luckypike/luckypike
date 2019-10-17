module Proxy
  extend ActiveSupport::Concern

  IMG_KEY = [Rails.application.credentials.dig(:imgproxy, :key)].pack('H*')
  IMG_SALT = [Rails.application.credentials.dig(:imgproxy, :salt)].pack('H*')

  def proxy_image_url(key, mode, width, height)
    url = "s3://luckypike-develop/#{send(key).key}"
    url = Base64.urlsafe_encode64(url).tr('=', '').scan(/.{1,16}/).join('/')
    url = "/#{mode}/#{width}/#{height}/sm/0/#{url}.jpg"

    digest = OpenSSL::Digest.new('sha256')
    hmac = Base64.urlsafe_encode64(OpenSSL::HMAC.digest(digest, IMG_KEY, IMG_SALT + url)).tr('=', '')

    Rails.application.credentials.dig(:imgproxy, :host) + hmac + url
  end
end
