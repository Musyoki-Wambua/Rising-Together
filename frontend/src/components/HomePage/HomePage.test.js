import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage component", () => {
  it("should render loading spinner initially", async () => {
    render(<HomePage />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByRole("img")).not.toBeInTheDocument());
  });

  it("should render NGO details after loading", async () => {
    render(<HomePage />);
    await waitFor(() => expect(screen.queryByRole("img")).not.toBeInTheDocument());
    expect(screen.getByText("NGO Name")).toBeInTheDocument();
    expect(screen.getByText("NGO Location")).toBeInTheDocument();
  });

  it("should render link to organization details", async () => {
    render(<HomePage />);
    await waitFor(() => expect(screen.queryByRole("img")).not.toBeInTheDocument());
    const donateButton = screen.getByText("Donate");
    expect(donateButton).toBeInTheDocument();
  });
});
