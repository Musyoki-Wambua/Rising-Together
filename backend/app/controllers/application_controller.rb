class ApplicationController < ActionController::API
  # before_action :authenticate_user!, except: [:signup, :login]
  rescue_from CanCan::AccessDenied do |exception|
  render json: { error: "Unauthorized to perform this action!" }, status: :forbidden
  end
  
  private
  
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
  
  def authenticate_user!
    unless user_logged_in?
      render json: { error: "Signup or Login to Access the Site!" }, status: :unauthorized
    end
  end
  
  def user_logged_in?
    current_user.present?
  end
end
  
