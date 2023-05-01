class Volunteer < ApplicationRecord
    belongs_to :user, class_name: 'User', required: true
    belongs_to :organization, class_name: 'Organization', required: true
end
