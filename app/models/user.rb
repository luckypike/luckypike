class User < ApplicationRecord
  include Proxy

  has_one_attached :avatar

  devise :database_authenticatable, :rememberable

  def remember_me
    true
  end

  def title
    [name, surname].join(' ')
  end

  def avatar_url
    proxy_image_url :avatar, :auto, 288, 288 if avatar.attached?
  end

  def as_json(options = nil)
    super({
      only: [],
      methods: %i[id title position avatar_url]
    }.deep_merge(options || {}))
  end
end
