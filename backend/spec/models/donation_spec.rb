require 'rails_helper'

RSpec.describe Donation, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
  subject { Review.new(id: "1", user_id: "1", contribution_amount: 600000, organization_id: "1" )}
   

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end
  it "is not valid without a user_id" do
    subject.user_id=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a contribution_amount" do
    subject.contribution_amount=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a organization_id" do
    subject.organization_id=nil
    expect(subject).to_not be_valid
  end

end
