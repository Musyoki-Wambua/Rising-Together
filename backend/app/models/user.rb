class User < ApplicationRecord
  has_secure_password 

  #Defining relationships 
      has_one :profile 
      has_many :organizations, through: :donations
      has_many :donations 
      has_many :reviews 

  #Validations
      validates :email, presence: true, uniqueness: true 
      validates :password, length: {in: 5..10}
      validates :password_confirmation, presence: true

      
  #Defining constants for role values
    ROLES = {
      admin: 'admin',
      user: 'user'
    }.freeze
  
  #Validate that role value is one of the defined constants
    validates :role, inclusion: { in: ROLES.values }   
  
end




