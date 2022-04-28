import React, { useState } from "react"
import './Title.css'

function Title(){
    const [num,usenNm]=useState(0);
    function handleClick(){
        usenNm(data=>data+1)
    }
    return(<>

    <h1>Hello</h1>
    <h2>It is {num}.</h2>
    <button onClick={handleClick}>Add</button>
    </>
       
    )
}

export default Title;