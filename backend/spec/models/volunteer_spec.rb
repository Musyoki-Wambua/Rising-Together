require 'rails_helper'

RSpec.describe Volunteer, type: :model do
  describe "associations" do
    it { should belong_to(:user).class_name('User') }
    it { should belong_to(:organization).class_name('Organization') }
  end
end
