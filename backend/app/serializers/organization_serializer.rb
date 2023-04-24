class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :year_established, :about, :adress, :contact, :user_id
end
