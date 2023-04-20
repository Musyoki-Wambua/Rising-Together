class CreateVolunteers < ActiveRecord::Migration[7.0]
  def change
    create_table :volunteers do |t|
      t.string :organization_name
      t.integer :user_id
      t.integer :organization_id

      t.timestamps
    end
  end
end
