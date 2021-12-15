import React from 'react';
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyTable(props) {
    return (
        <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>

  {props.comment.map((value) =>(
      
<tbody key = {value.id}>
    <tr>
    <td>{value.id}</td>
     <td>{value.name}</td>
      <td>{value.email}</td>
    </tr>
  </tbody>
   ))}
   
</Table>
        
            
        </div>
    )
}

export default MyTable