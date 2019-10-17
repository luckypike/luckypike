class VacanciesController < ApplicationController
  before_action :set_vacancy, only: %i[show edit update destroy]
  before_action :authenticate_user!

  def index
    @vacancies = Vacancy.all
  end

  def show; end

  def new
    @vacancy = Vacancy.new
  end

  def edit; end

  def create
    @vacancy = Vacancy.new(vacancy_params)

    if @vacancy.save
      redirect_to @vacancy, notice: 'Vacancy was successfully created.'
    else
      render :new
    end
  end

  def update
    if @vacancy.update(vacancy_params)
      redirect_to @vacancy, notice: 'Vacancy was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @vacancy.destroy
    redirect_to vacancies_url, notice: 'Vacancy was successfully destroyed.'
  end

  private

  def set_vacancy
    @vacancy = Vacancy.find(params[:id])
  end

  def vacancy_params
    params.require(:vacancy).permit(:title, :text, :user_id)
  end
end
