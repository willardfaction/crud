import React, { useState } from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';


const AddContact = ({ show, handleClose, addContact }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState('');

    function createContact() {
        if(!name || !number || !image) {
            alert('Some inputs are empty!');
            return;
        };

        let newContact = {
            id: Date.now(),
            name, 
            number,
            image
        }

        addContact(newContact);

        setName('');
        setNumber('');
        setImage('');

    }
    

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl size='lg' className='my-3' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
            <FormControl size='lg' className='my-3' placeholder='Number' onChange={(e) => setNumber(e.target.value)} value={number} />
            <FormControl size='lg' className='my-3' placeholder='Image Url' onChange={(e) => setImage(e.target.value)} value={image} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createContact}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddContact