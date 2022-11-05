
import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { userContext } from '../Context/UserProvider';
import { Link, useParams } from 'react-router-dom';
import Create from '../components/Create';


const Home = () => {

  
  const [users,setUsers] = useContext(userContext);
    
  

  return (
    <div>
    <Create> </Create>
      <Table striped bordered hover size='sm' className='my-3 text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Image URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {users.map(user => <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.quantity}</td>
            <td>{user.url}</td>
            <td>
              <Link to={'read/' + user.id}>
                <Button className='m-1' variant="outline-success">View</Button>
              </Link>
              {/* user.id */}
              <Link to={'delete/' + user.id}>
                <Button className='m-1' variant="outline-danger">Delete</Button>
              </Link>
            </td>
          </tr>)}


        </tbody>
      </Table>
    </div>
  );
          
}

export default Home;