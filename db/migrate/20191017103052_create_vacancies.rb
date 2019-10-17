class CreateVacancies < ActiveRecord::Migration[6.0]
  def change
    create_table :vacancies do |t|
      t.string :title
      t.text :text
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
