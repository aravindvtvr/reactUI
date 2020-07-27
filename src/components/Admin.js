import React from 'react'
import NavBar from './NavBar';
import * as ReactBootStrap from 'react-bootstrap'
import './admin.sass';
const Admin = () => {
  const users =[
        {userid:"user1" ,name :"Sam" , role :"admin"},
        {userid:"user2" ,name :"Ram" , role :"consumer"},
        {userid:"user3" ,name :"Joe" , role :"guest"}
  ]

  const renderUserDetails = (users,index) => {
      return(
          <tr>
              <td>{users.userid}</td>
              <td>{users.name}</td>
              <td>{users.role}</td>
          </tr>
      )

  }
  return (
    
    <div >
      <NavBar/>
      <div className ="page-container row col-md-4 col-md-push-4  Admin">
        <h3>User Details</h3>
      <ReactBootStrap.Table striped bordered hover text-center bg-light>
  <thead>
    <tr>
    
      <th>User ID</th>
      <th>User Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    {users.map(renderUserDetails)}
  </tbody>
</ReactBootStrap.Table>


</div>
    </div>
  )

  // return React.createElement(
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', null, 'Hello Vishwas')
  // )
}

export default Admin
