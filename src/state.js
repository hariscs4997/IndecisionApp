 class Counter extends React.Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this)
        this.sub=this.sub.bind(this)
        this.res=this.res.bind(this)
  this.state={
      count:0
  }
    }

componentDidMount(){
 var count=localStorage.getItem("num");
  count=parseInt(count,10);
  if(count>0){
      this.setState(()=>({count}))
  }
}

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!=this.state.count)
    localStorage.setItem("num",this.state.count)

    }
    add(){
     this.setState((prevState)=>{
return{
    count:prevState.count+1
}
     })
    }
    sub(){
this.setState((prevState)=>{
    return{
        count:prevState.count-1
    }
})
    }
    res(){
this.setState(()=>{
    return{
        count:0
    }
})
    }
    render(){
        return(
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.add}>+1</button>
            <button onClick={this.sub}>-1</button>
            <button onClick={this.res}>reset</button>
            </div>
        )
    }

}

ReactDOM.render(<Counter />,document.getElementById("app")) 

/*class Visibility extend s React.Component{
constructor(props){
    super(props)
    this.toggle=this.toggle.bind(this)
    this.state={
        visibility:false
    }
}

toggle(){
    this.setState((prevState)=>{
    return{
        visibility:!prevState.visibility
    }
    })
}


render(){
    return(
        <div>
        <button onClick={this.toggle}>{this.state.visibility ? "Hide details":"Show details"}</button>
        { this.state.visibility&&<p>Here are the details</p>
        }
        </div>
    )
}

}*/