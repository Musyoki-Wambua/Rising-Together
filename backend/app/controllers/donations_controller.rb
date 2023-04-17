class DonationsController < ApplicationController
    # app/controllers/donations_controller.rb

#class DonationsController < ApplicationController
    def index
      donations = Donation.all
      render json:donation
    end
   

    def show
        donation = Donation.find(params[:id])
        render json: donation
      end
    
    def create
      donation = Donation.new(donation_params)
  
      if donation.save
        redirect_to donation, notice: "Donation was successfully created."
      else
        render :new
      end
    end
  
   
    private
  
    def donation_params
      params.require(:donation).permit(:contribution_amount, :organization_id, :user_id)
    end
  end
  
end
