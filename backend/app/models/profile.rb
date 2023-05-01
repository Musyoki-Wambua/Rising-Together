class Profile < ApplicationRecord
    belongs_to :user

    #Validations
    # validates :first_name, :last_name, :gender, :country, :skills, presence: true 
    # validates :image_url, format: { with: /\.(jpeg|jpg)\z/i, message: "must be in JPEG format" }
end
