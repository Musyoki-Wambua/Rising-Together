import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DonationForm from "./DonationForm";

describe("DonationForm", () => {
  test("renders a donation form with a submit button", () => {
    render(
      <BrowserRouter>
        <DonationForm />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole("button", { name: /Submit/ });
    expect(submitButton).toBeInTheDocument();
  });

  test("calls the onSubmit callback when the submit button is clicked", () => {
    const mockOnSubmit = jest.fn();
    render(
      <BrowserRouter>
        <DonationForm onSubmit={mockOnSubmit} />
      </BrowserRouter>
    );


    const submitButton = screen.getByRole("button", { name: /Submit/ });
    fireEvent.click(submitButton);

  });
});
