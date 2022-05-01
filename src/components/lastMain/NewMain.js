import React, { Component} from "react";
import "./NewMain.css";

class UserLogin extends Component {
  render() {
    return (
      <div className="container">
        <h1>Registration</h1>
        <form>
          <label htmlFor="fname">E-mail:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="lname">Password:</label>
          <br />
          <input type="password" id="lname" name="fname" />
          <br />
          <button className="btnClass" type="button">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default UserLogin;
