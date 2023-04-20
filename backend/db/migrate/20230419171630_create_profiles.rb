class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :image_url
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :gender
      t.string :country
      t.string :contact
      t.string :skills
      t.integer :user_id

      t.timestamps
    end
  end
end
