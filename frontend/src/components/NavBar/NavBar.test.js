import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders the logo and organization name", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const logo = screen.getByAltText("Logo");
    const organizationName = screen.getByText("Rising Together");
    expect(logo).toBeInTheDocument();
    expect(organizationName).toBeInTheDocument();
  });

  it("displays navigation links correctly", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    const whoWeAreLink = screen.getByRole("link", { name: "Who We Are" });
    const profileLink = screen.getByRole("link", { name: "Profile" });
    const helpLink = screen.getByRole("link", { name: "Help" });
    const organizationsLink = screen.getByRole("link", {
      name: "Organizations",
    });
    expect(homeLink).toBeInTheDocument();
    expect(whoWeAreLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
    expect(helpLink).toBeInTheDocument();
    expect(organizationsLink).toBeInTheDocument();
  });

  it("displays the Add Organization and Insights buttons when role is admin", () => {
    const mockLocation = {
      pathname: "/",
      search: "?role=admin",
    };
    jest.spyOn(require("react-router-dom"), "useLocation").mockReturnValue(
      mockLocation
    );
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const addOrgButton = screen.getByRole("button", { name: "Add Organization" });
    const insightsButton = screen.getByRole("button", { name: "Insights" });
    expect(addOrgButton).toBeInTheDocument();
    expect(insightsButton).toBeInTheDocument();
  });

  it("does not display the Add Organization and Insights buttons when role is not admin", () => {
    const mockLocation = {
      pathname: "/",
      search: "?role=user",
    };
    jest.spyOn(require("react-router-dom"), "useLocation").mockReturnValue(
      mockLocation
    );
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const addOrgButton = screen.queryByRole("button", { name: "Add Organization" });
    const insightsButton = screen.queryByRole("button", { name: "Insights" });
    expect(addOrgButton).not.toBeInTheDocument();
    expect(insightsButton).not.toBeInTheDocument();
  });

  it("displays the mobile menu correctly", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const menuToggleButton = screen.getByRole("button", {
      name: "Open main menu",
    });
    userEvent.click(menuToggleButton);

    const homeLink = screen.getByRole("link", { name: "Home" });
    const whoWeAreLink = screen.getByRole("link", { name: "Who We Are" });
    const profileLink = screen.getByRole("link", { name: "Profile" });
    const helpLink = screen.getByRole("link", { name: "Help" });
    const organizationsLink = screen.getByRole("link", {
      name: "Organizations",
    });
    expect(homeLink).toBeInTheDocument();
    expect(whoWeAreLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
    expect(helpLink).toBeInTheDocument();
    expect(organizationsLink).toBeInTheDocument();
    });
    });
