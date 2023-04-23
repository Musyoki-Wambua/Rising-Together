class Organization < ApplicationRecord

    belongs_to :user 
    has_many :donations 
    has_many :volunteers 
    has_many :reviews
    has_many :users, through: :volunteers 

    # validates :image_url, format: { with: /\.(jpeg|jpg)\z/i, message: "must be in JPEG format" }
end
