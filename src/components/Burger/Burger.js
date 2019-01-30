import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger=(props)=>
{
    let transformedIngredients = Object.keys( props.ingredient )
    .map( igKey => {
        return [...Array( props.ingredient[igKey] )].map( ( i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    } );
    return(
       <div className={classes.Burger}> 
          < BurgerIngredient type="bread-top"/>
         {transformedIngredients}
          < BurgerIngredient type="bread-bottom"/>
       </div>
    );
}

export default burger;