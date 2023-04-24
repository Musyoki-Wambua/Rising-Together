class DonationsController < ApplicationController
    render json: Donation.all
end
