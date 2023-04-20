class DonationsController < ApplicationController
  # load_and_authorize_resource :donation 
  def index
   render json: Donation.all
   
    end
   
    def show
        donation = Donation.find(params[:id])
        render json: donation
      end
    
    def create
      donation = Donation.new(donation_params)
      if donation.save
       render json: donation, status: :created
       else
      render json: donation.errors, status: :unprocessable_entity
     end
    end
  
   
    private
  
    def donation_params
      params.require(:donation).permit(:contributed_amount, :organization_id, :user_id, :username)
    end
end