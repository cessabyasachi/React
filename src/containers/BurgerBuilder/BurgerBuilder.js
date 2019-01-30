import React, { Component } from 'react';
import Ax from '../../hoc/Ax'
import Burger from '../../components/Burger/Burger'
class BurgerBulider extends Component
{

    state={
        ingredient:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2

        }

    };
    render()
    {
        return(
            <Ax>
               <Burger ingredient={this.state.ingredient}/>
                <div>build control</div>
            </Ax>

        );
    }
}
export default BurgerBulider;