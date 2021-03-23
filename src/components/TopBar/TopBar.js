import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img 
        src="https://bulma.io/images/bulma-logo.png" 
        alt="" 
        width="auto" 
        height="24" 
        className="d-inline-block align-top"
    />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about">
              <span className="nav-link active">Home</span>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/contact">
              <span className="nav-link active">Contact</span>
            </Link>
          </li>
          <li>
          <Link to={{pathname: "/user/1", testValue: "Hello", showValue: true}}>
              <span className="nav-link active">Users</span>
            </Link>
            </li>
            <li>
          <Link to="/signin" >
              <span className="nav-link active">Sign In</span>
            </Link>
            </li>
            <li>
          <Link to="/signup">
              <span className="nav-link active">Sign Up</span>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  </nav> );
}
 
export default TopBar;