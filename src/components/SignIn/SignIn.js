import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
    const [user, setUser] = useState({userName :"", password: ""})
    const [redirectUrl, setRedirectUrl] = useState(false)

    return ( <div className="container">
        <h1>Sign In</h1>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    onChange={(e) => setUser({...user, userName: e.target.value}) }
    placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
        onChange={(e) => setUser({...user, password: e.target.value}) }
    />
  </div>
  <button type="submit" class="btn btn-primary" onClick={() => setRedirectUrl(true)}>Submit</button>
</form>
        {redirectUrl && <Redirect path="/"/>}
    </div> );
}
 
export default SignIn;