class DonationSerializer < ActiveModel::Serializer
  attributes :id, :contributed_amount, :organization_id, :user_id
end
