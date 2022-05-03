import React, { Component } from "react";
import "./NewMain.css";
import { FaRegEyeSlash } from 'react-icons/fa';
class UserLogin extends Component{
  clickHandler1 = () => {
    console.log("Yalniz .ru domenlərinə icazə verilir.");
  };
  clickHandler2 = () => {
    console.log("Ən azi 8 simvol");
  };
  constructor(){
    super();
    this.state={
      showPassword: false,
    }
  }
  render(){
console.log(this.state.showPassword);
  

    return (
      <div className="container">
        <h1>Sign In</h1>
  
        
          <br />
          <input onFocus={ this.clickHandler1}
           type="email" 
           placeholder="Email or phone number"
           name="fname" />
          <br />
      
          <br />
      
<div className="passwordDiv">
          <input onFocus={this.clickHandler2}
          type={this.state.showPassword ? "text" : "password"}
          placeholder="Password"
          name="fname" />
         <div className="myHide">
        <a onClick={()=>this.setState({ showPassword: !this.state.showPassword})} ><FaRegEyeSlash size={25} />
          </a> 
          </div>
        
 </div>
         <br />
          <button className="btnClass" type="button">
          <p>Log In
            </p>  
          </button>
       
      </div>
    );
  }
}
export default UserLogin;
