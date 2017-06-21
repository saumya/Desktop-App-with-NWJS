// functional component
import React, {Component} from 'react'

function Login(props){
  return(
    <div>
      <h1>Login</h1>
        <ul>
            <li>User Name: <input type="text" name="fname" /></li>
            <li>Password: <input type="text" name="lname" /></li>
            <li><button>Login</button></li>
        </ul>
    </div>
  )
}

export default Login;