class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :first_name, :last_name, :age, :gender, :country, :contact, :skills, :user_id
end
