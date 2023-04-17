class Donation < ApplicationRecord
    # belongs_to :organization
    # belongs_to :user
  
    # # validates the presence and format of contributed_amount
    # validates :contribution_amount, presence: true, format: { with: /\A\$[0-9,]+\z/ }
  
    # # validates the presence of organization_id and user_id
    # validates :organization_id, :user_id, presence: true
  end