import React from 'react'
import SubOptions from "./SubOptions"
const Options=(props)=>
    (
        <div>
        <div className="widget-header">
        <h3 className="widget-header--title">Your Options</h3>
        <button className="button button--link" disabled={!props.haslen} onClick={props.remove}>Remove All</button></div>
      { !props.haslen && <p className="widget--message">Please add an option to get started</p>}
        {props.option.map((o,index)=>{
          return  <SubOptions count={index+1}delete={props.delete} key={o}option={o}/>
        })}
        
        </div>
    )

export default Options
