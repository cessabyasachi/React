import React from 'react'
import Ax from '../../../hoc/Ax'
import Button from '../../UI/Button/Button'
const ordersummery=(props)=>
{
    const ingredientList=Object.keys(props.ingredients).map(
        (iKey,index)=>{
            return <li key={index}><span style={{textTransform:'capitalize'}}>{iKey}</span> : { props.ingredients[iKey]}</li>
        }
        )

    return(
         <Ax>
             <h3>Your order</h3>
             <p>Burger with ingredient</p>
             <ui>
                 {ingredientList}
             </ui>
             <p>Continue to checkout??</p>
             <Button btntype="Danger" clicked={props.purchasecancel} >CANCEL</Button>
             <Button btntype="Success" clicked={props.purchasecontinue}>CONTINUE</Button>
         </Ax>
    );
}
export default ordersummery;