require 'rails_helper'

RSpec.describe Profile, type: :model do
  describe "associations" do
    it { should belong_to(:user).class_name('User') }
  end

  describe "validations" do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:gender) }
    it { should validate_presence_of(:country) }
    it { should validate_presence_of(:skills) }
    it { should allow_value('image.jpg', 'image.jpeg').for(:image_url) }
    it { should_not allow_value('image.png', 'image.gif').for(:image_url) }
  end
end
