import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {

    const newStyle = {
            color:'white'
    };
    
  return (
      
    <nav className="navbar navbar-dark bg-dark fixed-top  justify-content-center">
      
      <Link className="navbar-brand" style = {newStyle} to="/">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link className="navbar-brand" style = {newStyle} to="/admin">
        Administration
      </Link>
      <Link className="navbar-brand"  style = {newStyle} to="/servicerepo">
        Service Repository
      </Link>
      <Link className="navbar-brand" style = {newStyle} to="/">
        Consumer Inventory
      </Link>
      <Link className="navbar-brand"  style = {newStyle} to="/">
        Endpoints Inventory
      </Link>
      <Link className="navbar-brand"  style = {newStyle} to="/servicestats">
        Service Stats
      </Link>
      <Link className="navbar-brand"  style = {newStyle} to="/">
        APIs
      </Link>
      <Link className="navbar-brand"  style = {newStyle} to="/login">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout
      </Link>
    </nav>
  );
}

export default NavBar;