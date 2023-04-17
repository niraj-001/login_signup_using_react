import React from 'react'
import '../style/signup.css';
import {Link} from 'react-router-dom';

const signup = ()=>{
    return(
        <div id="id01" className="modal">
  <form className="modal-content">
    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px" /> Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

      <div className="clearfix">
        <button type="submit" className="signup">Sign Up</button>
      </div>
    </div>
  </form>
</div>


    )
}