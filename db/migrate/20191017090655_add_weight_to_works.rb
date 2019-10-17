class AddWeightToWorks < ActiveRecord::Migration[6.0]
  def change
    add_column :works, :weight, :integer, default: 0
  end
end
