class PagesController < ApplicationController
  def index
    @works = Work.order(weight: :asc).all.with_attached_image
  end
end
