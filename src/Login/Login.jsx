import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='Login'>
<div className='Login-Customer'>
<h4>Registered Customers</h4>
<span>If you have an account, sign in with your email address.</span>
<div className='login-info'><p>Email:</p><input type="text" /></div>
<div className='login-info'><p>Password:</p><input type="text" /></div>
<div className='login-info-buttons'><button>Login</button><a href="#"> Forgot Your Password?</a> <a href="">creat New account</a></div>




</div>

    </div>
  )
}

export default Login