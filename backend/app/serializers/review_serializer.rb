class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :organization_id, :rating, :comments
end
