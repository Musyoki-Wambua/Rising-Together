class SessionsController < ApplicationController
  # Login user
  def login
    user=User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id]=user.id
      render json: user, status: :ok
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  # Logout User
  def destroy
    session.delete :user_id
    head :no_content
    render json: { message: "Successfully logged out!"}
  end

end


