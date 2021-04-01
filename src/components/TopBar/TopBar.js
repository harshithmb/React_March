import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const TopBar = (props) => {

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

            <li>
          <Link to="/cart">
              <span className="nav-link active">Cart - {props?.cart.length}<i></i>  <strong>{props?.userName}</strong></span>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  </nav> );
}

const mapStateToProps = store => ({
  cart: store?.cart,
  userName: store?.userName
})
 
export default connect(mapStateToProps, null)(TopBar);

//rcredux
// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class TopBar extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
