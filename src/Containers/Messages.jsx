import React, { useState, useEffect } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import "./Messages.css"; // Add styles here if necessary

const usersList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]; // Replace this with your actual data

export const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    // Reset messages (fetch user-specific messages here if needed)
    setMessages([]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="messages-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h5>Chats</h5>
        <ListGroup>
          {usersList.map((user) => (
            <ListGroup.Item
              key={user.id}
              active={selectedUser?.id === user.id}
              onClick={() => handleUserSelect(user)}
              className="user-item"
            >
              {user.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        {selectedUser ? (
          <>
            <div className="chat-header">
              <h5>Chat with {selectedUser.name}</h5>
            </div>
            <div className="chat-messages">
              {messages.length ? (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`message ${
                      msg.sender === "You" ? "sent" : "received"
                    }`}
                  >
                    <span className="sender">{msg.sender}:</span>
                    <span className="text">{msg.text}</span>
                  </div>
                ))
              ) : (
                <p className="no-messages">No messages yet. Say hi!</p>
              )}
            </div>
            <div className="chat-input">
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button onClick={handleSendMessage} className="send-button">
                Send
              </Button>
            </div>
          </>
        ) : (
          <p className="no-user-selected">Select a user to start chatting.</p>
        )}
      </div>
    </div>
  );
};
