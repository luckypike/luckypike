class AddColorToWorks < ActiveRecord::Migration[6.0]
  def change
    add_column :works, :color, :string
  end
end
