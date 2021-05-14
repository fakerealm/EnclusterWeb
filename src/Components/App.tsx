import React from 'react';
import Navbar from './Navbar';
import Style from './style';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// importing buttons from react bootstrap 
import Button from 'react-bootstrap/Button';
// Importing The style sheet
import "./style.css";




function App() {
  return (
    <div className="app">
      <Navbar />
     

      
      <h1 className="Main-heading">Welcome to NotesCluster</h1>
      <h2>Lorem Ipsum Doler sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Style />
      <Button variant="primary">Sign up</Button>{' '}
    </div>
  );
}

export default App;
