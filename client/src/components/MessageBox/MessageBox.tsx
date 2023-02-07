import React, { useState } from "react";
import { useEffect } from "react";
import HeaderComponent from "./Header/Header";
import MessageInputComponent from "./MessageInput/MessageInput";
import MessageListComponents from "./MessageList/MessageList";
import { Contact, Message, User } from "../../models";

interface Props {
  selectedContact: Contact | null;
}

const MessageBoxComponent = ({ selectedContact }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/messages")
      .then((response) => response.json())
      .then((json) => setMessages(json));
  }, []);

  const saveMessage = (newMessage: Message): void => {
    setMessages([...messages, newMessage]);
  };

  const user: User = JSON.parse(localStorage.getItem("userName") || "");

  let filteredMessages: Message[] = [];

  if (selectedContact) {
    filteredMessages = messages.filter((message) => {
      return (
        message.recieverId === selectedContact.id &&
        message.senderId === user.id
      );
    });
  }

  return (
    <div className="chat-section">
      <div
        className="modal"
        style={{ display: selectedContact ? "none" : "flex" }}
      >
        Please choose contact from list
      </div>
      <HeaderComponent selectedContact={selectedContact} />
      <MessageListComponents filteredMessages={filteredMessages} user={user} />
      <MessageInputComponent
        selectedContact={selectedContact}
        saveMessage={saveMessage}
      />
    </div>
  );
};

export default MessageBoxComponent;
