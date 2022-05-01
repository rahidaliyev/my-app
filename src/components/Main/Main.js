import React, { Component } from "react";

class Subscribe extends Component{

    clickHandler=(event)=>{
        console.log(event.target);
    };


render(){
    return(
        <button type="button" onClick={this.clickHandler}>
            Subscribe
        </button>
    )
}


}
export default Subscribe