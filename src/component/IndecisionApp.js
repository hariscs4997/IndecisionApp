import React from "react"
import AddOptions from "./AddOptions"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"
import OptionModal from "./OptionModal"
export default class IndecisionApp extends React.Component{
    
     state={
            op:[],
            Selected:undefined
        }
    

   
   delete=(op)=>{
    this.setState((prevState)=>({
       op:prevState.op.filter((option)=>op!==option)
    }))
   }
add=(option)=>{
    if(!option){
        return "Enter valid value to add item"
    }
    else if(this.state.op.indexOf(option)>-1){
 return "The item already exists"
    }
    this.setState((prevState)=>({ op:prevState.op.concat(option)}))

}
edit=()=>{
this.setState(()=>({
    Selected:undefined
}))

}
    remove=()=>{
        this.setState(()=>({
            op:[]}))
    }
    mess=()=>{
        const temp=Math.floor(Math.random()*this.state.op.length);
    this.setState(()=>({
        Selected:this.state.op[temp]
    }))

   
    }
    componentDidMount(){
        const d=localStorage.getItem("options");
        const op=JSON.parse(d);
        if(op){
      this.setState(()=>({op}))
      }
          }
          componentDidUpdate(prevProps,prevState){
            
              if(prevState.op.length!==this.state.op.length){
      
                  const json=JSON.stringify(this.state.op);
                  localStorage.setItem("options",json)
      
                  
              }
      
      
          }
    render(){
      
        return(
            
            <div>
            {console.log("app is running")}
            <Header/>
           <div className="container ">
            <Action hasOption={this.state.op.length>0} hasMess={this.mess}/>
        <div className="widget">
            <Options delete={this.delete} haslen={this.state.op.length>0}  option={this.state.op} remove={this.remove}/>
            <AddOptions option={this.state.op} add={this.add} />
            </div> 
            <OptionModal select={this.state.Selected} alert={this.edit}/>
             </div>
             </div>


        )
    }
}



