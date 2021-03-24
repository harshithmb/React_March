import React, { Component, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';




const SignIn = () => {
    
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
    const [redirectUrl, setRedirectUrl] = useState(false)

    return ( <div className="container">
        <h1>Sign In</h1>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    
    ref={userNameRef}
    // onChange={(e) => setUser({...user, userName: e.target.value}) }
    placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
         ref={passwordRef}
        
        //onChange={(e) => setUser({...user, password: e.target.value}) }
    />
  </div>
  <button type="submit" class="btn btn-primary" onClick={(e) => {
    e.preventDefault()
    console.log(userNameRef.current.value)
    console.log(passwordRef.current.value)
    //setRedirectUrl(true)
    
    }}>Submit</button>
</form>
        {redirectUrl && <Redirect path="/"/>}
    </div> );
}
 
export default SignIn;




// class SignIn extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   // this.state = { 
//   //   //   userName: "",
//   //   //   password: ""
//   //   //  }
    
//   // }

//   userName = React.createRef()
//     password =  React.createRef()
//   render() { 
//     // let {password, userName} = this
//     return ( <form>
//       <div class="form-group">
//         <label for="exampleInputEmail1">Email address</label>
//         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
//         ref={this.userName}
//         placeholder="Enter email"/>
//         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//       </div>
//       <div class="form-group">
//         <label for="exampleInputPassword1">Password</label>
//         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
//             // onChange={(e) => this.setState({password: e.target.value}) }
//             ref={this.password}
//         />
//       </div>
//       <button type="submit" class="btn btn-primary" onClick={(e) => {
//         e.preventDefault()
//         // let sendData = { 
//         //   userName : this.userName.current.value,
//         //   password : this.password.current.value
//         // }
//         console.log("Submitted Values", 
//         this.userName.current.value,
//         this.password.current.value
//         )}}>Submit</button>
//     </form> );
//   }
// }
 
// export default SignIn;