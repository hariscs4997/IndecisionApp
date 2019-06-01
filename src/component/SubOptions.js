import React from "react"
import { POINT_CONVERSION_COMPRESSED } from "constants";
const SubOptions=(props)=>
    (
        <div className="option">
        
<p className="option--text">{props.count}. {props.option}</p>
<button  className="button button--link" onClick={(e)=>{
props.delete(props.option)
}}>Remove</button>
 </div>
    )

export default SubOptions;