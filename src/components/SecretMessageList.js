import React from "react";

const SecretMessageList = ({ messages, currentUser }) => {
  return (
    <div className="bg-gray-100 p-4 h-64 overflow-y-auto mb-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-2 ${msg.sender === currentUser.uid ? "text-right" : "text-left"}`}
        >
          <span className="bg-blue-500 text-white rounded px-2 py-1 inline-block">
            {msg.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SecretMessageList;
