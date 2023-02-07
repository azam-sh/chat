import { useState } from "react";
import { Contact, Message } from "../../../models";
import { BsArrowUpCircle } from "react-icons/bs";

interface Props {
  selectedContact: Contact | null;
  saveMessage: (message: Message) => void;
}

const MessageInputComponent = ({ selectedContact, saveMessage }: Props) => {
  const [text, setText] = useState("");

  const user = JSON.parse(localStorage.getItem("userName") || "");

  const sendMessage = () => {
    if (text === "") {
      alert("Type message");
    } else {
      if (selectedContact) {
        const message: Message = {
          // id: Math.random(),
          recieverId: selectedContact.id,
          senderId: user.id,
          content: text,
        };

        fetch("http://localhost:4000/messages", {
          method: "POST",
          body: JSON.stringify(message),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
        saveMessage(message);
        setText("");
      }
    }
  };

  return (
    <div className="input-section">
      <div className="input-form">
        <input
          value={text}
          disabled={selectedContact ? false : true}
          onChange={(e) => setText(e.target.value)}
          className="message-input"
          type="text-area"
        />
        <button
          disabled={selectedContact ? false : true}
          onClick={sendMessage}
          className="message-button"
        >
          <BsArrowUpCircle size="50%" />
        </button>
      </div>
    </div>
  );
};

export default MessageInputComponent;
