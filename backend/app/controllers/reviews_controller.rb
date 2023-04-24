class ReviewsController < ApplicationController
    render json:  Review.all
end
