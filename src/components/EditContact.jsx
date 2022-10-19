import React, { useState } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

const EditContact = ({ editContact, showEdit, handleEditClose, addEditContact }) => {

    const [contact, setContact] = useState(editContact);

    const editName = (e) => {
        setContact({
            ...contact,
            name: e.target.value
        });
    };

    const editNumber = (e) => {
        setContact({
            ...contact,
            number: e.target.value
        });
    };

    const editImage = (e) => {
        setContact({
            ...contact,
            image: e.target.value
        });
    };

    function saveChanges() {
        addEditContact(contact);
    }


  return (
    <>
      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form">
                <FormControl size="lg" className="my-3" placeholder="Name" value={contact.name} onChange={editName} />
                <FormControl size="lg" className="my-3" placeholder="Number" value={contact.number} onChange={editNumber} />
                <FormControl size="lg" className="my-3" placeholder="Image" value={contact.image} onChange={editImage} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="success" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditContact