class AddUsernameToDonations < ActiveRecord::Migration[7.0]
  def change
    add_column :donations, :username, :string
  end
end
