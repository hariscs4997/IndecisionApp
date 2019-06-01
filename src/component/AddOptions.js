import React from "react"
export default class AddOptions extends React.Component{
    state={
        error:undefined
    }
    
     click=(e)=>{
        e.preventDefault();
       const temp=e.target.elements.val.value.trim();
         const error=  this.props.add(temp)
           e.target.elements.val.value="";
       this.setState(()=>({error}) )
    }
     render=()=>{
         return(
             <div>
            
 {this.state.error &&<p className="add-option-error">  {this.state.error}</p>}
 <form className="add-option"onSubmit={this.click}>

 <input className="add-option--input" type="text" name="val"/>
 <input type="submit" className="button"  value="Add Option"/>
 </form>
 
             </div>
         )
     }
 }