class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :organization_id
      t.integer :rating
      t.string :comments

      t.timestamps
    end
  end
end
