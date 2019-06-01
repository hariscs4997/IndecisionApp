const app={
a:[]
}

const temp=(e)=>{
    e.preventDefault();
var opt=e.target.elements.temp1.value;

if(opt){
    app.a.push(opt);
    e.target.elements.temp1.value="";
    rend();
}
}
const remove=()=>{
    app.a=[];
    rend();
}
const temp2=() =>{
const o=Math.floor(Math.random()*app.a.length)
alert(app.a[0]);
}

const rend=()=>{
const r=(
    <div>
    <ol>
<p>{app.a.length}</p>
{
    app.a.map((num)=> <li key={num}>{num}</li>
    )
}
</ol>
<button disabled={app.a.length==0} onClick={temp2}> What Should I do?</button>
<button onClick={remove}> Remove All</button>
    <form onSubmit={temp}>
 <input type="text" name="temp1"/>
 <button >Click</button>
    </form>
    
    </div>
)
ReactDOM.render(r,document.getElementById("app"))
}
rend();