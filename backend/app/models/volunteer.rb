class Volunteer < ApplicationRecord
    belongs_to: user
    belongs_to: orgnization
end
