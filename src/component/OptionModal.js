import React from 'react';
import Modal from 'react-modal';

const OptionModal  =(props)=>
    (
        <Modal 
        isOpen={!!props.select}
        onRequestClose={props.alert}
        contentLabel="hello"
        closeTimeoutMS={200}
        className="modal"
        >
        <h3 className="modal--title">Selected Option</h3>
        {props.select&&<p className="modal--content">{props.select}</p>}
        <button className="button"onClick={props.alert}>OK</button>
        </Modal>
    )

export default OptionModal