class User < ApplicationRecord
    has_secure_password
    has_one :profile
    has_many :organizations, through: :donations
    has_many :donations
    has_many :reviews 
end
