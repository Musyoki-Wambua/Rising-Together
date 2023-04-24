class Organization < ApplicationRecord
    belongs_to :user
    has_many :volunteers 
    has_many :reviews 
    has_many :users, through: :volunteers
      
end
