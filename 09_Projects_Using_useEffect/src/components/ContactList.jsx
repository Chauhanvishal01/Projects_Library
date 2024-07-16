import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleClick = () => {
    if (newContact.name.trim() !== "" && newContact.number.trim() !== "") {
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setNewContact({ name: "", number: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  return (
    <div className="contact">
      <div className="inputs">
        <input
          type="text"
          name="name"
          placeholder="Enter contact name..."
          value={newContact.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Enter contact number"
          value={newContact.number}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add contact</button>
      </div>
      <div className="list">
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              {contact.name} : {contact.number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
