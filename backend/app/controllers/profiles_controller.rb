class ProfilesController < ApplicationController
    render json: Profile.all
end
end
