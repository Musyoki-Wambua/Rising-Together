class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :organization_name, :user_id

  belongs_to :organization
  belongs_to :user
end
