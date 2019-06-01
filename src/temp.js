/*import isSenior,{isAdult,canDrink} from "./person.js"

console.log(isAdult(18));
console.log(isAdult(21));
console.log(isSenior(65));*/


import React from "react";
import ReactDom from "react-dom";
import IndecisionApp from "./component/IndecisionApp";
import "normalize.css/normalize.css";
import "./style/style.scss" ;


ReactDOM.render(<IndecisionApp />,document.getElementById("app"))

