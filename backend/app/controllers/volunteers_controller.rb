class VolunteersController < ApplicationController
   

    #GET/ volunteers
    def index
        render json: Volunteer.all
        
    end
# GET/volunteers/:id
    def show
        volunteer = Volunteer.find_by(id: params[:id])
        if volunteer
            render json: volunteer, status: :ok
        else
            render json: {error: "Volunteer not found"}, status: :not_found 
        end

    end

    # POST/ volunteers
    def create 
        volunteer = Volunteer.new(volunteer_params)
        if volunteer.save
            render json: volunteer, status: :created
        else 
            render json: {errors: "volunteer.errors.full_messages"}, status: :unprocessable_entity
        end
    end

    #DELETE/ volunteers/:id
    def destroy
        volunteer = Volunteer.find(params[:id])
        volunteer.destroy
        render json: {message: "Volunteer deleted"}
    end

    private
    def volunteer_params
        params.permit(:organization_name, :organization_id, :user_id)
    end
end
