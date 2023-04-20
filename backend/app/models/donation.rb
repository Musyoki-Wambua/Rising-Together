class Donation < ApplicationRecord
    belongs_to :organization
    belongs_to :user

    # validates :user_id, presence: true
    # validates :organization_id, presence: true
    # validates :contribution_amount, presence: true
  
   
  end