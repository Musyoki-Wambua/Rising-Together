import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ChatBox from "./ChatBox";

describe("ChatBox", () => {
  it("should render the chat button", () => {
    render(<ChatBox />);
    const chatButton = screen.getByRole("button", { name: /telegram/i });
    expect(chatButton).toBeInTheDocument();
  });

  it("should show the chat window when the chat button is clicked", () => {
    render(<ChatBox />);
    const chatButton = screen.getByRole("button", { name: /telegram/i });
    fireEvent.click(chatButton);
    const messageInput = screen.getByPlaceholderText(/type a message/i);
    expect(messageInput).toBeInTheDocument();
  });

  it("should respond to user input with appropriate bot messages", () => {
    render(<ChatBox />);
    const chatButton = screen.getByRole("button", { name: /telegram/i });
    fireEvent.click(chatButton);
    const messageInput = screen.getByPlaceholderText(/type a message/i);
    const sendButton = screen.getByRole("button", { name: /send/i });

    fireEvent.change(messageInput, { target: { value: "hi" } });
    fireEvent.click(sendButton);
    expect(screen.getByText(/how can i help you/i)).toBeInTheDocument();

    fireEvent.change(messageInput, { target: { value: "what is your name" } });
    fireEvent.click(sendButton);
    expect(screen.getByText(/my name is charityai/i)).toBeInTheDocument();

    fireEvent.change(messageInput, { target: { value: "help" } });
    fireEvent.click(sendButton);
    expect(screen.getByText(/if you need any./i)).toBeInTheDocument();

    fireEvent.change(messageInput, { target: { value: "random input" } });
    fireEvent.click(sendButton);
    expect(
      screen.getByText(/i'm sorry, i don't understand./i)
    ).toBeInTheDocument();
  });
});
