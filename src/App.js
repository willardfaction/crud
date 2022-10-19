import React, { useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addContact(newContact) {
    let newContacts = [...contacts];
    newContacts.push(newContact);
    setContacts(newContacts);
    handleClose();
  }

  function deleteContact(id) {
    let newContacts = [...contacts];
    newContacts = newContacts.filter(item => item.id !== id);
    setContacts(newContacts);
  }

  const [showEdit, setShowEdit] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let newContact = contacts.find(item => item.id === id);
    setEditContact(newContact);

    handleEditShow();
  }

  function addEditContact(obj) {
    let newContacts = contacts.map(item => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });

    setContacts(newContacts);
    handleEditClose();
  }

  return (
    <>
      <Header handleShow={handleShow} />
      <AddContact
        show={show}
        handleClose={handleClose}
        addContact={addContact}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        handleEdit={handleEdit}
      />
      {showEdit && (
        <EditContact
          editContact={editContact}
          showEdit={showEdit}
          handleEditClose={handleEditClose}
          addEditContact={addEditContact}
        />
      )}
    </>
  );
};

export default App;
