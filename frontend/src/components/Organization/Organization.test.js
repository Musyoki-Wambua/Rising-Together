import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Organization from "./Organization";

const mockOrganizations = [
  { id: 1, name: "Org 1" },
  { id: 2, name: "Org 2" },
  { id: 3, name: "Org 3" },
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(() => ({ search: "?role=admin" })),
}));

describe("Organization", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("renders organization names", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockOrganizations));

    render(
      <BrowserRouter>
        <Organization />
      </BrowserRouter>
    );

    expect(screen.getByText("Org 1")).toBeInTheDocument();
    expect(screen.getByText("Org 2")).toBeInTheDocument();
    expect(screen.getByText("Org 3")).toBeInTheDocument();
  });

  it("filters organizations by name", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockOrganizations));

    render(
      <BrowserRouter>
        <Organization />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText("Search organization");
    fireEvent.change(searchInput, { target: { value: "2" } });

    expect(screen.getByText("Org 2")).toBeInTheDocument();
    expect(screen.queryByText("Org 1")).toBeNull();
    expect(screen.queryByText("Org 3")).toBeNull();
  });

  it("shows delete button for admin users", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockOrganizations));

    render(
      <BrowserRouter>
        <Organization />
      </BrowserRouter>
    );

    const deleteButtons = screen.getAllByText("Delete");
    expect(deleteButtons.length).toBe(mockOrganizations.length);
  });

  it("deletes an organization", async () => {
    const orgIdToDelete = mockOrganizations[1].id;
    fetch.mockResponseOnce(JSON.stringify(mockOrganizations));

    render(
      <BrowserRouter>
        <Organization />
      </BrowserRouter>
    );

    const deleteButton = screen.getAllByText("Delete")[1];
    fireEvent.click(deleteButton);


  });
});
