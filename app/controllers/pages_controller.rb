class PagesController < ApplicationController
  def index
    @works = Work.order(weight: :asc).all.with_attached_image
    @vacancies = Vacancy.includes(:user).all
  end
end
