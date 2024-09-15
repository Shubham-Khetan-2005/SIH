import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import ImageUploader from './components/ImageUploader';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);

  // Function to handle new message and response
  const handleSendMessage = async (message) => {
    const newMessage = { sender: 'user', text: message };
    setMessages([...messages, newMessage]);

    // Simulate sending the message to backend (API call for NLP and image recognition)
    const response = await getChatbotResponse(message, image);

    const botMessage = { sender: 'bot', text: response };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  // Function to handle image upload
  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Image Recognition Chatbot</h1>
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <ImageUploader onImageUpload={handleImageUpload} />
        <ChatBox messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

const getChatbotResponse = async (message, image) => {
  // Simulating a backend response for demo purposes
  return "I'm processing the image you uploaded.";
};

export default App;
