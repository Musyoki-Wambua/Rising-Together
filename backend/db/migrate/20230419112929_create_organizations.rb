class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :description
      t.string :location
      t.integer :year_established
      t.string :image_url
      t.string :video_url
      t.string :info
      t.string :contact
      t.integer :user_id

      t.timestamps
    end
  end
end
