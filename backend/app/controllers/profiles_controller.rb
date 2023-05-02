class ProfilesController < ApplicationController
  # load_and_authorize_resource :profile
def index
  render json: Profile.all
end
  #Get a user profile
  def show
      profile = Profile.find_by(id: params[:id])
      if profile
          render json: profile, status: :ok
      else
          render json: { error: "Profile not found!"}, status: :not_found
      end
  end
  def create
    # if current_user.role == 'admin' || current_user.role == 'user'
      profile = Profile.create(profile_params)
      if profile.valid?
        render json: profile, status: :ok
      else
        render json: { errors: profile.errors.full_messages }, status: :unprocessable_entity
      end
    end
    # else
    #   render json: { error: "Access Denied!" }, status: :unauthorized
    # end
    def update
      profile = Profile.find_by(id: params[:id])
      if profile
        if current_user.role == 'admin' || current_user.id == profile.user_id
          if profile.update(profile_params)
            render json: profile, status: :ok
          else
            render json: { error: "Failed to update profile!" }, status: :unprocessable_entity
          end
        else
          render json: { error: "Access Denied!" }, status: :unauthorized
        end
      else
        render json: { error: "Profile not found!" }, status: :not_found
      end
    end
  #Delete a user profile / CANCAN
  # def destroy
  #     profile = Profile.find_by(id: params[:id])
  #     profile.delete
  #     render json: { message: "Profile successfully deleted" }, status: :ok
  # end
  def destroy
    profile = Profile.find_by(id: params[:id])
    if profile
      if current_user.role == 'admin' || current_user.id == profile.user_id
        profile.destroy
        render json: { message: "Profile successfully deleted" }, status: :ok
      else
        render json: { error: "Access Denied!" }, status: :unauthorized
      end
    else
      render json: { error: "Profile not found!" }, status: :not_found
    end
  end
  # private
  # def profile_params
  #     params.permit(:image_url, :first_name, :last_name, :age, :gender, :country, :contact, :skills, :user_id)
  # end
  private
def profile_params
  params.permit(:image_url, :first_name, :last_name, :age, :gender, :country, :contact, :skills, :user_id)
end
end