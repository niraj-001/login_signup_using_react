import React from "react";
import '../style/Login.css'
import {Link} from "react-router-dom";

const Login = () =>{
    return(

      /*<div>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>*/

        

        <form>
        <div className="logo">
            <h2>HM</h2>
        </div>
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
      
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
      
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
          <Link to="/forget_password">forget password?</Link>

          <p >or<br/>Login with</p> 
          <button className="l-btn">Login with google</button>         
          <button className="l-btn">Login with facebook</button>

          <p >Create new account? <Link to="/signup">signup</Link></p>
        </div>
      </form>
          
        
    )
}

export default Login