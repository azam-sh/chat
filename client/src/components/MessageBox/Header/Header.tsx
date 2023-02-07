import { Contact } from "../../../models";

interface Props {
  selectedContact: Contact | null;
}

const HeaderComponent = ({ selectedContact }: Props) => {
  return (
    <div className="header">
      {selectedContact && (
        <div className="header-contact">
          <img
            src={selectedContact.image}
            style={{
              width: selectedContact.name ? "50px" : "0",
              height: selectedContact.name ? "50px" : "0",
            }}
            alt=""
            className="header-contact-img"
          />
          <span className="header-contact-name">{selectedContact.name}</span>
          <span className="header-contact-lastname">
            {selectedContact.lastname}
          </span>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
