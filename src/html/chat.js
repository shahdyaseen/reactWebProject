import React from 'react';

const Chat = () => {
  return (
    
    <div className="chat-container">
    <h1 className="chat-title">Chat with Admins</h1>
    <input
      type="text"
      className="search-bar"
      placeholder="Search for an admin..."
      oninput="filterAdmins()"
    />{" "}
    {/* Filter admins based on search */}
    <div className="box available-admins-box">
      <h2>Available Admins</h2>
      <div id="admin-list" className="admin-list">
        {/* Admin 1 */}
        <div className="admin" onclick="openChat('admin1')">
          <img
            className="avatar"
            src="/assets/images/admin-avatar.png"
            alt="Admin 1"
          />
          <span>Admin1</span>
        </div>
        {/* Admin 2 */}
        <div className="admin" onclick="openChat('admin2')">
          <img
            className="avatar"
            src="/assets/images/admin-avatar.png"
            alt="Admin 2"
          />
          <span>Admin2</span>
        </div>
        {/* Admin 3 */}
        <div className="admin" onclick="openChat('admin3')">
          <img
            className="avatar"
            src="/assets/images/admin-avatar.png"
            alt="Admin 3"
          />
          <span>Admin3</span>
        </div>
      </div>
    </div>
    <div
      id="chat-box-admin1"
      className="box chat-box"
      style={{ display: "none" }}
    >
      <h2 className="chat-header">Chat with: Admin1</h2>
      <div className="chat-messages">
        <div className="message admin-message">
          <span className="sender">Admin1:</span>
          <span className="text">Hello! How can I assist you today?</span>
        </div>
        <div className="message user-message">
          <span className="sender">You:</span>
          <span className="text">I have a question about my account.</span>
        </div>
        <div className="message admin-message">
          <span className="sender">Admin1:</span>
          <span className="text">Sure! Please provide your account details.</span>
        </div>
      </div>
      <div className="message-input">
        <textarea placeholder="Type your message..." defaultValue={""} />
        <button className="Send-but">Send</button>
      </div>
    </div>
    <div
      id="chat-box-admin2"
      className="box chat-box"
      style={{ display: "none" }}
    >
      <h2 className="chat-header">Chat with: Admin2</h2>
      <div className="chat-messages">
        <div className="message admin-message">
          <span className="sender">Admin2:</span>
          <span className="text">Hello! How can I assist you?</span>
        </div>
      </div>
      <div className="message-input">
        <textarea placeholder="Type your message..." defaultValue={""} />
        <button className="Send-but">Send</button>
      </div>
    </div>
    <div
      id="chat-box-admin3"
      className="box chat-box"
      style={{ display: "none" }}
    >
      <h2 className="chat-header">Chat with: Admin3</h2>
      <div className="chat-messages">
        <div className="message admin-message">
          <span className="sender">Admin3:</span>
          <span className="text">Good day! How can I help you?</span>
        </div>
      </div>
      <div className="message-input">
        <textarea placeholder="Type your message..." defaultValue={""} />
        <button className="Send-but">Send</button>
      </div>
    </div>
  </div>
  
    
  );
}

export default Chat;
