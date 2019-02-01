import React from 'react'
import classes from './Button.css'

const buttontype=(props)=>{
    return(
         <button className={[classes.Button, props.btntype].join(' ')} onClick={props.clicked}>{props.children}</button>
    );
}
export default buttontype;