// functional component
import React, {Component} from 'react'

function Login(props){
    var letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };

  return(
    <div style={letterStyle}>
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