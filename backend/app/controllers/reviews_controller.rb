class ReviewsController < ApplicationController
  def index
      render json: Review.all

    end
  
    def show
      review=Review.find(params[:id])
      render json: review
    end
  
    # def create
    #   review = Review.new(review_params)
    #   if review.valid?
  
    #   # if review.save

    #     render json: review, status: :created
    #   # else
    #   #   render json: review.errors, status: :unprocessable_entity
    #   # end
    #   end
    # end



    def create
      @review = Review.new(review_params)
    
      if @review.save
       render json: @review
      else
        # handle failed save
      end
    end
    
  
    def destroy
      review = Review.find(params[:id])
      review.delete
      head :no_content
    end
    private
    
    def review_params
      params.require(:review).permit(:user_id, :organization_id, :organization_name, :username, :rating, :comments)
    end   

end