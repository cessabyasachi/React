import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls=[
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"},
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"}
];

const buildcontrols=(props)=>(
    <div className={classes.BuildControls}>
    <p>Current Price:<strong>{parseFloat(props.price).toFixed(2)}</strong></p>
         {controls.map((item,i)=>{
      return <BuildControl 
      key={item.label} 
      label={item.label}
       added={()=>props.Ingredientadd(item.type)}
       remove={()=>props.Ingredientremove(item.type)}
       disable={props.disable[item.type]}/>
   })}

   <button className={classes.OrderButton} onClick={props.purchasingHandler}
    disabled={!props.Puchaseable}>ORDER NOW</button>
    </div>

   )

export default buildcontrols;