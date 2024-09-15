import React from 'react';

const Message = ({ sender, text }) => {
  return (
    <div
      className={`message ${
        sender === 'user' ? 'text-right bg-blue-100' : 'text-left bg-gray-200'
      } p-3 rounded-lg mb-2`}
    >
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default Message;
