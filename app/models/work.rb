class Work < ApplicationRecord
  include Proxy

  has_one_attached :image

  def as_json(options = nil)
    super({
      only: [],
      methods: %i[id title desc text url image_urls]
    }.deep_merge(options || {}))
  end

  def image_urls
    {
      o: proxy_image_url(:image, :fit, 1500, 1500),
      m: proxy_image_url(:image, :fill, 1000, 1000),
      h: proxy_image_url(:image, :fill, 1500, 1000),
      v: proxy_image_url(:image, :fill, 1000, 1500)
    } if image.attached?
  end
end
