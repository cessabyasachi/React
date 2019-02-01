import React from 'react'
import classes from './Modal.css'
import Ax from '../../../hoc/Ax'
import Backdrop from '../Backdrop/Backdrop'

const modal=(props)=>(

<Ax>
   
      <Backdrop show={props.purchasingCondition} clicked={props.clicked}/>  
         <div className={classes.Modal} style=
           {{Transform: props.purchasingCondition?'translateY(0)':'translateY(-100vh)',
           opacity:props.purchasingCondition?'1':'0'}}>
          {props.children}
        </div> 
</Ax>
);


export default modal;