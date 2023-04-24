class UsersController < ApplicationController
   # before_action :set_user, only: [:show, :edit, :update, :destroy]
  
    # GET /users
    def index
      render json:  User.all
    end
  
  #   # GET /users/1
  #   def show
  #       user = User.find(params[:id])
  #       if user
  #       render json: user, status: :ok
  #       else
  #           render json: {error: "user not found" }, status: :unprocessable_entity
  #   end
  
  #   # GET /users/new
  #   def new
  #     user = User.new

  #   end
  
  #   # GET /users/1/edit
  #   def edit
  #       user = User.edit
  #       if User.edit(user_params) 
  #           render json: 
  #       else

  #       end

  #   end
  
  #   # POST /users
  #   def create
  #     user = User.new(user_params)
  
  #     if user.save
  #       redirect_to @user, notice: 'User was successfully created.'
  #     else
  #       render :new
  #     end
  #   end
  
  #   # PATCH/PUT /users/1
  #   def update
  #     if @user.update(user_params)
  #       redirect_to @user, notice: 'User was successfully updated.'
  #     else
  #       render :edit
  #     end
  #   end
  
  #   # DELETE /users/1
  #   def destroy
  #     user.destroy
  #      render json: {message "User was successfully destroyed."}
  #   end
  
  #   private
  
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_user
  #     user = User.find(params[:id])
  #   end
  
  #   # Only allow a list of trusted parameters through.
  #   def user_params
  #     params.permit(:username, :email, :password, :password_confirmation, :gender, :role)
  #     email_param = params[:user][:email]
  
  #     if validate_email(email_param)
  #       permitted_params[:email] = email_param
  #       if email_param =~ /@admin\./i
  #         permitted_params[:role] = 'admin'
  #       end
  #     end
  
  #     return permitted_params
  #   end
  end
  