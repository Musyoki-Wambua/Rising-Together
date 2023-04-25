require 'rails_helper'

RSpec.describe ReviewsController, type: :controller do
  describe "GET #index" do
    it "returns a JSON response with all reviews" do
      review1 = Review.create(rating: 3, comments: "Good")
      review2 = Review.create(rating: 4, comments: "Great")

      get :index

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to match_array([
        { "id" => review1.id, "rating" => 3, "comments" => "Good" },
        { "id" => review2.id, "rating" => 4, "comments" => "Great" }
      ])
    end
  end

  describe "GET #show" do
    it "returns a JSON response with the requested review" do
      review = Review.create(rating: 3, comments: "Good")

      get :show, params: { id: review.id }

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to eq(
        { "id" => review.id, "rating" => 3, "comments" => "Good" }
      )
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new review" do
        expect {
          post :create, params: { review: { rating: 3, comments: "Good" } }
        }.to change(Review, :count).by(1)

        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)).to eq(
          { "id" => Review.last.id, "rating" => 3, "comments" => "Good" }
        )
      end
    end

    context "with invalid params" do
      it "returns an error response" do
        expect {
          post :create, params: { review: { rating: 6 } }
        }.to_not change(Review, :count)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to eq(
          { "rating" => ["must be less than or equal to 5"], "comments" => ["can't be blank"] }
        )
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested review" do
      review = Review.create(rating: 3, comments: "Good")

      expect {
        delete :destroy, params: { id: review.id }
      }.to change(Review, :count).by(-1)

      expect(response).to have_http_status(:no_content)
    end
  end
end
