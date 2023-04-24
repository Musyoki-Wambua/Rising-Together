class OrganizationsController < ApplicationController
    def index
        render json: Organization.all
    end
    def about
    end
end
