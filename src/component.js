class IndecisionApp extends React.Component{
    
    constructor(props){
        super(props);
        this.remove=this.remove.bind(this)
        this.mess=this.mess.bind(this)
        this.add=this.add.bind(this)
       this.delete=this.delete.bind(this)
        this.state={
            op:[]
        }
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
   delete(op){
    this.setState((prevState)=>({
       op:prevState.op.filter((option)=>op!==option)
    }))
   }
add(option){
    if(!option){
        return "Enter valid value to add item"
    }
    else if(this.state.op.indexOf(option)>-1){
 return "The item already exists"
    }
    this.setState((prevState)=>({ op:prevState.op.concat(option)}))

}

    remove(){
        this.setState(()=>({
            op:[]}))
    }
    mess(){
        const temp=Math.floor(Math.random()*this.state.op.length);
        alert(this.state.op[temp])
    }
    render(){
      
        return(
            <div>
            <Header/>
            <Action hasOption={this.state.op.length>0} hasMess={this.mess}/>
            <Options delete={this.delete} haslen={this.state.op.length>0}  option={this.state.op} remove={this.remove}/>
            <AddOptions option={this.state.op} add={this.add} />
            </div>


        )
    }
}

const Header=(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <p>Put your life in the hands of a computer</p>
        </div>
    )
}
Header.defaultProps={
    title:"Indecision App"
}

const Action =(props)=>{
        return(
            <div>
            <button disabled={!props.hasOption} onClick={props.hasMess}>What should I do?</button>
            </div>
        )
      
}

const Options=(props)=>{
    return(
        <div>
        <button disabled={!props.haslen} onClick={props.remove}>Remove All</button>
        <p>Option Components here</p>
        {props.option.map((o)=>{
          return  <SubOptions delete={props.delete} key={o}option={o}/>
        })}
        
        </div>
    )
}
const SubOptions=(props)=>{
    return(
        <div>
        
 {props.option}
<button onClick={(e)=>{
props.delete(props.option)
}}>Remove</button>
 </div>
    )
}

class AddOptions extends React.Component{
   constructor(props){
       super(props)
       this.click=this.click.bind(this)
       this.state={
           error:undefined
       }
   }
   
    click(e){
       e.preventDefault();
      const temp=e.target.elements.val.value.trim();
        const error=  this.props.add(temp)
          e.target.elements.val.value="";
      this.setState(()=>({error}) )
   }
    render(){
        return(
            <div>
<form onSubmit={this.click}>
{this.state.error &&<p>{this.state.error}</p>}
<input type="text" name="val"/>
<input type="submit"  value="click"/>
</form>

         AddOption component here
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById("app"))