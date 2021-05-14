import React from 'react';
// Importing 
import {Navbar, Nav} from 'react-bootstrap';

const Top_nav = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Notes-Cluster</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Main</Nav.Link>
       
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
  );
};
// Main export
export default Top_nav;
