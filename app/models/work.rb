class Work < ApplicationRecord
  has_one_attached :image

  IMG_KEY = [Rails.application.credentials.dig(:imgproxy, :key)].pack('H*')
  IMG_SALT = [Rails.application.credentials.dig(:imgproxy, :salt)].pack('H*')

  def as_json(options = nil)
    super({
      only: [],
      methods: %i[id title desc text url image_url]
    }.deep_merge(options || {}))
  end

  def image_url
    # url = image.service.send(:object_for, image.key).public_url
    url = "s3://luckypike-develop/#{image.key}"
    url = Base64.urlsafe_encode64(url).tr('=', '').scan(/.{1,16}/).join('/')
    url = "/fill/1500/1000/sm/0/#{url}.jpg"

    digest = OpenSSL::Digest.new('sha256')
    hmac = Base64.urlsafe_encode64(OpenSSL::HMAC.digest(digest, IMG_KEY, IMG_SALT + url)).tr('=', '')

    # Rails.application.credentials.dig(:imgproxy, :host) + hmac + url
    Rails.application.credentials.dig(:imgproxy, :host) + hmac + url
  end
end
