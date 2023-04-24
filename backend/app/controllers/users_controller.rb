class UsersController < ApplicationController

  # before_action :authenticate_user!, except: [:signup, :login]
 # Get a list of all users
 def index
     render json: User.all
   end
 
 
 def show 
   user = User.find_by(id: params[:id])
   
 # Check if the current user is an admin or the user whose record is being requested
   if current_user.role == 'admin' || current_user == user
     render json: user
   else
     render json: { error: "Unauthorized Access!" }, status: :unauthorized
   end
 end 
 
 # Create a new user
   def signup
     user = User.create(user_params)
     if user.valid?
       session[:user_id]=user.id
       render json: user, status: :created
     else
       render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
     end
   end


 #Admin is able to signup other users, including admins 
 def create
   if current_user.role == 'admin'
     user = User.create(user_params)
     if user.valid?
       render json: user, status: :created
     else
       render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
     end
   else
     render json: { error: "Unauthorized Access!" }, status: :unauthorized
   end
 end

#update 
def update 
 user = User.find_by(id: params[:id])
   if current_user.role == 'admin' || current_user == user
     user.update(user_params)
     render json: user, status: :ok 
   else 
     render json: { error: "Access Denied!" }, status: :unauthorized
 end
end

 # Login user
     def login
       user = User.find_by(username: params[:username])
       if user&.authenticate(params[:password])
 
 #Check if the user role is either an admin or user
       if user.role == 'admin' || user.role == 'user' 
         session[:user_id] = user.id
         render json: user, status: :ok
         else
           render json: { error: "Unauthorized Access!" }, status: :unauthorized
         end
       else
         render json: { error: "Invalid username or password" }, status: :unauthorized
       end
     end
   
 # Logout
   def destroy
     session.delete :user_id
     render json: { message: "Successfully logged out!" }, status: :ok
   end
   
   private
   def user_params
     params.permit(:username, :email, :gender, :password, :password_confirmation, :role)
   end
 
   
 end 
