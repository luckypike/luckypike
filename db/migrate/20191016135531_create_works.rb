class CreateWorks < ActiveRecord::Migration[6.0]
  def change
    create_table :works do |t|
      t.string :title
      t.string :desc
      t.text :text
      t.string :url

      t.timestamps
    end
  end
end
