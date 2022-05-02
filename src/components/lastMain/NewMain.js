import React, { Component } from "react";
import "./NewMain.css";

class UserLogin extends Component{
  constructor(){
    super();
    this.state={
      showPassword: false
    }
  }
  render(){
console.warn(this.state.showPassword);
  

    return (
      <div className="container">
        <h1>Sign In</h1>
        <form>
        
          <br />
          <input
           type="email" 
           placeholder="Email or phone number"
           name="fname" />
          <br />
      
          <br />
          <div className="col-3">
<div className="input-group mb-3 shadow border rounded">
          <input 
          type="password" 
          placeholder="Password"
          name="fname" />
          <button
          onClick={()=>this.state({ showPassword: !this.state.showPassword})}
           >Show
           </button>
</div>
          </div>
          
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
