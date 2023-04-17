import React from 'react'
import "../style/forget-password.css";

const forget_password =()=>{
    return(
    
	<form>
		<h2>Forget Password</h2>
		<p>Please enter your email address and we'll send you a link to reset your password.</p>
		<label htmlFor="email">Email:</label>
		<input type="email" id="email" name="email" required />
		<input type="submit" value="Submit" />
	</form>
    )
}