import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ContactCard = ({ item, deleteContact, handleEdit }) => {
  return (
    <Card style={{ width: '18rem', padding: '5px' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            Number: {item.number}
        </Card.Text>
        <Button variant="danger" onClick={() => deleteContact(item.id)}>Delete</Button>
        <Button variant='success' className='mx-1' onClick={() => handleEdit(item.id)}>Edit</Button>
      </Card.Body>
    </Card>
  )
}

export default ContactCard