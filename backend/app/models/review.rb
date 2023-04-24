class Review < ApplicationRecord
    
    belongs_to :user
    belongs_to :organization
    
      # validates :user_id, presence: true
      # validates :comments, presence: true
      # validates :organization_id,presence: true
    
      
    
    
end
