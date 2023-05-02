import React, { useState } from "react";

function ChatBox() {
  const [userMessage, setUserMessage] = useState("");
  const [conversation, setConversation] = useState([
    { text: "Hey!", sender: "bot" },
  ]);
  const [showChat, setShowChat] = useState(false);

  function handleMessage(event) {
    event.preventDefault();
    const message = event.target.elements.message.value;
    let response = "";
    if (message.includes("hi") || message.includes("hey")) {
      response = "How can I help you?";
    } else if (message.includes("how are you")) {
      response = "I'm doing well, thank you for asking.";
    } else if (message.includes("what is your name")) {
      response = "My name is CharityAI.";
    } else if (message.includes("whats your name")) {
      response = "My name is CharityAI.";
    } else if (message.includes("help")) {
      response = "If you need any.";
    } else {
      response = "I'm sorry, I don't understand. Can you please rephrase?";
    }
    setConversation([
      ...conversation,
      { text: message, sender: "user" },
      { text: response, sender: "bot" },
    ]);
    event.target.elements.message.value = "";
  }

  function handleButtonClick() {
    setShowChat(true);
  }

  if (!showChat) {
    return (
      //   <button onClick={handleButtonClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
      //     Chat

      //   </button>

      <div class="flex items-center justify-center">
        <div class="m-3">
          <button
            onClick={handleButtonClick}
            id="telegram"
            class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-green-400 border-green-400 hover:bg-green-400 hover:text-white text-2xl"
          >
            <i class="fab fa-telegram-plane"></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gray-50 rounded-lg shadow-lg">
        <button
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={() => setShowChat(false)}
      >X
        <svg
          className="h-6 w-6 fill-current"
           
        >
          
        </svg>
      </button>
      <div className="flex flex-col space-y-4">
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user" ? "justify-end" : "justify-start"
            } flex`}
          >
            <div
              className={`${
                message.sender === "user"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-900"
              } rounded-lg py-2 px-4 max-w-xs`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleMessage} className="flex mt-4">
        <input
          type="text"
          name="message"
          placeholder="Type a message"
          className="flex-1 bg-white rounded-lg px-4 py-2 focus:outline-none focus:bg-gray-100 focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg ml-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
