import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, deleteContact, handleEdit }) => {
  return (
    <>
        <center style={{fontSize: '30px', margin: '20px'}}>Contact List</center>
        <div className='d-flex justify-content-between flex-wrap w-75 m-auto'>
            {contacts?.map(item => (
                <ContactCard key={item.id} item={item} deleteContact={deleteContact} handleEdit={handleEdit} />
            ))}
        </div>
    </>
  )
}

export default ContactList