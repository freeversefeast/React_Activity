import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { userContext } from '../Context/UserProvider';

const Create = () => {

  const [users, setUsers] = useContext(userContext)
  const [message, setMessage] = useState('')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [quantity, setquantity] = useState('')
  const [url, seturl] = useState('')

  const updatedId = (e) => {
    setId(e.target.value);
  }
  const updatedName = (e) => {
    setName(e.target.value);
  }

  const updatedQuantity = (e) => {
    setquantity(e.target.value);
  }
  const updatedUrl = (e) => {
    seturl(e.target.value);
  }

  const addUser = (e) => {
    setUsers([...users, { id: id, name: name, quantity: quantity, url: url }])
    e.preventDefault();

    setId('')
    setName('')
    setquantity('')
    seturl('')

    if (id && name && quantity && url) {
      setMessage('User added successfully!')
    } 
  }

  return (
    <div>
      <h4 className="text-center m-3 text-success">{message}</h4>
      <Form onSubmit={addUser}>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Enter id number" value={id} onChange={updatedId} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={updatedName} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Enter Quantity" value={quantity} onChange={updatedQuantity} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="url" placeholder="Enter Image Url" value={url} onChange={ updatedUrl } required />
        </Form.Group>

        <span className='d-block text-end'>
          <Button variant="success" type="submit" className='m-1'>
            Add
          </Button>
          
        </span>
      </Form>
    </div>
  );
};

export default Create;