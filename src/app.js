class Person{
   constructor(name="anonymous",age=0){
   this.name=name;
   this.age=0
   }
   getGreeting(){
      return `Hi.I am ${this.name}`
   }
   
}

class Traveller extends Person{
   constructor(name,age,location){
super(name,age);
this.location=location;
   }
   haslocation(){
      return !!this.location;
   }
   getGreeting(){
      let temp=super.getGreeting();
      if(this.haslocation()){
         temp+=`I live in ${this.location}`;
      }
      return temp;
   }
 
}

const me=new Traveller();
const me1=new Traveller("lol",2,"karachi");

console.log(me.getGreeting());
console.log(me.getGreeting())