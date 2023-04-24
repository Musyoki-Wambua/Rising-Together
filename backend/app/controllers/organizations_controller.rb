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
        render json: organization, status: :ok
    else 
        render json: { errors: "Organization not found!"}, status: :not_found
    end
end

#Create an organization 
def create 
    organization = Organization.create(organization_params)
    if organization.valid? 
        render json: organization, status: :ok 
    else
        render json: { errors: organization.errors.full_messages}, status: :unprocessable_entity 
    end
end

#Update an organization/:id
def update 
    organization = Organization.find_by(id: params[:id])
    if organization.valid? 
        organization.update(organization_params)
        render json: organization, status: :ok
    else 
    render json: { errors: "Organization not found!"}, status: :not_found
    end
end

#Delete an organization/:id
def destroy
    organization=Organization.find_by(id: params[:id])
    organization.delete 
    head :no_content
end

private 
def organization_params 
    params.permit(:name, :description, :location, :year_established, :image_url, :video_url, :info, :contact, :user_id)
end
end
