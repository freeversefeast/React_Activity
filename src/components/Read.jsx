import React from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../Context/UserProvider';


const Read = () => {
  const { id } = useParams();
  const [users] = useContext(userContext);

  const user = users.filter((user) => user.id == id)
  return (
    <div>
      <Card>
        <Card.Header>Id: {user[0].id}</Card.Header>
        <Card.Body>
          <p>Name: {user[0].name}</p>
          <p>quantity: {user[0].quantity}</p>
          <p>Image: <img src={user[0].url}></img></p>
        </Card.Body>
      </Card>
    
    </div>
  );
};

export default Read;