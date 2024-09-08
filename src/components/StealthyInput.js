import React, { useState } from "react";

const StealthyInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow border rounded-l px-2 py-1"
        placeholder="Type a secret message..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded-r"
      >
        Send
      </button>
    </form>
  );
};

export default StealthyInput;
