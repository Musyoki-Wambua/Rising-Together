class ReviewsController < ApplicationController
    def index
      reviews = Review.all
      render json: reviews,only: [:comments,:ratings]
    end
  
    def show
      review=Review.find(params[:id])
      render json: review,only: [:comments,:ratings]
    end
  
    def create
      review = Review.new(review_params)
  
      if review.save

        render json: review, status: :created
      else
        render json: review.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      review = Review.find(params[:id])
      review.delete
      head :no_content
    end
  
    private
  
    def review_params
      params.require(:review).permit(:rating, :comments, :user_id, :organization_id)
    end
  end