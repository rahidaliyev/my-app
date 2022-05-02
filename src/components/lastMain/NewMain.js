import React, { Component} from "react";
import "./NewMain.css";

class UserLogin extends Component {
  render() {
    return (
      <div className="container">
        <h1>Registration</h1>
        <form>
        
          <br />
          <input
           type="email" 
           placeholder="Email or phone number"
           name="fname" />
          <br />
      
          <br />
          <input 
          type="password" 
          placeholder="Password"
          name="fname" />
          <br />
          <button className="btnClass" type="button">
          <p>Log In
            </p>  
          </button>
        </form>
      </div>
    );
  }
}
export default UserLogin;
