class PagesController < ApplicationController
  def index
    @works = Work.order(weight: :asc).all
  end
end
