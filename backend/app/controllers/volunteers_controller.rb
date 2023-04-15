class VolunteersController < ApplicationController
    before_action :authenticate_volunteer!, except: [:index, :show]

    #GET/ volunteers
    def index
        volunteer = Volunteer.All 
        render :json: volunteers 
    end
# GET/volunteers/:id
    def show
        volunteer = Volunteer.find_by(id: params[:id])
        if volunteer
            render json: volunteer
        else
            render :json {error: "Volunteer not found"}
        end

    end

    # POST/ volunteers
    def create 
        volunteer = Volunteer.new(volunteer_params)
        if volunteer.save
            render json: volunteer, status: :created
    end
end
