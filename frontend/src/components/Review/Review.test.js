import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Review from "./Review";

describe("Review", () => {
  it("renders form inputs", () => {
    render(<Review />);
    expect(screen.getByLabelText("Rating:")).toBeInTheDocument();
    expect(screen.getByLabelText("Comments:")).toBeInTheDocument();
  });

  it("updates rating state on input change", () => {
    render(<Review />);
    const ratingInput = screen.getByLabelText("Rating:");
    fireEvent.change(ratingInput, { target: { value: "8" } });
    expect(ratingInput).toHaveValue(8);
  });

  it("updates comments state on input change", () => {
    render(<Review />);
    const commentsInput = screen.getByLabelText("Comments:");
    fireEvent.change(commentsInput, { target: { value: "Great experience!" } });
    expect(commentsInput).toHaveValue("Great experience!");
  });

  it("submits form data on submit button click", () => {
    const mockSubmit = jest.fn();
    render(<Review onSubmit={mockSubmit} />);
    const ratingInput = screen.getByLabelText("Rating:");
    fireEvent.change(ratingInput, { target: { value: "9" } });
    const commentsInput = screen.getByLabelText("Comments:");
    fireEvent.change(commentsInput, { target: { value: "Awesome service!" } });
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledWith({
      rating: 9,
      comments: "Awesome service!",
    });
  });
});
