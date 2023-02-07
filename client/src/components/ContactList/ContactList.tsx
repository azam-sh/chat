import { useState, useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Contact } from "../../models";

const ContactListComponent = ({
  setContact,
}: {
  setContact: (contact: Contact) => void;
}) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showPersonalInfo, setShowPersonalInfo] = useState<boolean>(false);

  const user = JSON.parse(localStorage.getItem("userName") || "");

  useEffect(() => {
    fetch("http://localhost:4000/contacts")
      .then((response) => response.json())
      .then((json) => setContacts(json));
  }, []);

  const logout = () => {
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <div className="contact-section">
      {showPersonalInfo ? (
        <div className="personal-info-section">
          <button
            onClick={() => setShowPersonalInfo(false)}
            className="personal-info-btn"
          >
            {" "}
            <BsArrowLeft style={{ marginRight: "5px" }} /> Contact List
          </button>
          <div className="personal-info">
            <img src={user.img} alt="avatar" className="personal-avatar" />
            <span className="personal-name">{user.name}</span>
          </div>
          <button onClick={logout} className="personal-info-btn">
            Log out
          </button>
        </div>
      ) : (
        <div className="contact-list">
          <button
            onClick={() => setShowPersonalInfo(true)}
            className="personal-info-btn"
          >
            {" "}
            <BsArrowRight style={{ marginRight: "5px" }} /> Personal info
          </button>
          {contacts &&
            contacts.map((contact: Contact) => {
              return (
                <div
                  key={contact.id}
                  onClick={() => setContact(contact)}
                  className="contact"
                >
                  <img src={contact.image} alt="" className="contact-img" />
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-lastname">{contact.lastname}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ContactListComponent;
