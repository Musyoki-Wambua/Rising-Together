import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./login.js";

test('renders the Login page', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type in your Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type in your Password")).toBeInTheDocument();
    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(screen.getByText("Don't have an account ?")).toBeInTheDocument();

});