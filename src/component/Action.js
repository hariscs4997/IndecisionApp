import React from "react"
const Action =(props)=>
(
        <div>
        <button className="bigbutton" disabled={!props.hasOption} onClick={props.hasMess}>What should I do?</button>
        </div>
    )
  


export default Action;