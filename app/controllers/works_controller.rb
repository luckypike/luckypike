class WorksController < ApplicationController
  before_action :set_work, only: %i[show edit update destroy]
  before_action :authenticate_user!

  def index
    @works = Work.order(weight: :asc).all
  end

  def show; end

  def new
    @work = Work.new
  end

  def edit; end

  def create
    @work = Work.new(work_params)

    if @work.save
      redirect_to @work, notice: 'Work was successfully created.'
    else
      render :new
    end
  end

  def update
    if @work.update(work_params)
      redirect_to @work, notice: 'Work was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @work.destroy
    redirect_to works_url, notice: 'Work was successfully destroyed.'
  end

  private

  def set_work
    @work = Work.find(params[:id])
  end

  def work_params
    params.require(:work).permit(:title, :desc, :text, :url, :image, :weight)
  end
end
