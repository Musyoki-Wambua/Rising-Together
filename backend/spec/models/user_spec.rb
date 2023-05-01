require 'rails_helper'

RSpec.describe User, type: :model do
  describe "associations" do
    # Define associations test
    it { should have_one(:profile).class_name('Profile') }
    it { should have_many(:organizations).through(:donations) }
    it { should have_many(:donations) }
    it { should have_many(:reviews) }

    # Define validations tests
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_length_of(:password).is_at_least(5).is_at_most(10) }
    it { should validate_presence_of(:password_confirmation) }
    it { should validate_inclusion_of(:role).in_array(User::ROLES.values) }
  end
end

  

