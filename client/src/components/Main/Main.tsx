import { useState, useEffect } from "react";
import MessageBoxComponent from "../MessageBox/MessageBox";
import ContactListComponent from "../ContactList/ContactList";
import { Contact } from "../../models";

const MainComponent = () => {
  const checkUser = (): Contact | null => {
    const value: string | null = localStorage.getItem("selectedContact");

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  };

  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    checkUser()
  );

  useEffect(() => {
    localStorage.setItem("selectedContact", JSON.stringify(selectedContact));
  }, [selectedContact]);

  const setContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="main">
      <ContactListComponent setContact={setContact} />
      <MessageBoxComponent selectedContact={selectedContact} />
    </div>
  );
};

export default MainComponent;
