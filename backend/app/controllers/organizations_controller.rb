class OrganizationsController < ApplicationController
    # load_and_authorize_resource :organization
     
    #Get a list of all organizations
    def index 
        render json: Organization.all 
    end
    
    #Get a specific organization/:id
    def show 
        organization = Organization.find_by(id: params[:id])
        if organization
            render json: organization,  include: :reviews  
        else 
            render json: { error: "Organization not found!"}, status: :not_found
        end
    end
    
    #Create an organization
    def create 
        # if current_user.role == 'admin'
          organization = Organization.create(organization_params)
          if organization.valid? 
            render json: organization, status: :ok 
          else
            render json: { errors: organization.errors.full_messages }, status: :unprocessable_entity 
          end
        # else
        #   render json: { error: "Access Denied!" }, status: :unauthorized
        # end
      end
      
    #Update an organization/:id/  
    def update 
        organization = Organization.find_by(id: params[:id])
        if organization
          # if current_user.role == 'admin' 
            if organization.update(organization_params)
              render json: organization, status: :ok
            else
              render json: { error: "Organization not updated!" }, status: :unprocessable_entity
            end
          # else
          #   render json: { error: "Access Denied!" }, status: :unauthorized
          # end
        else 
          render json: { error: "Organization not found!"}, status: :not_found
        end
      end
      
    #Delete an organization/:id
    def destroy
        organization = Organization.find_by(id: params[:id])
        # if current_user.role == 'admin' # Check if current user has admin role
          organization.delete
        #   render json: {message: "Organization successfully deleted!"}, status: :ok
        # else
        #   render json: { error: "Access Denied!" }, status: :unauthorized
        # end
      end
      
      
    private 
    def organization_params 
        params.permit(:name, :description, :location, :year_established, :image_url, :video_url, :info, :contact, :user_id)
    end
    end
    
