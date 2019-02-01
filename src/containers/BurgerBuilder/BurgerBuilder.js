import React, { Component } from 'react';
import Ax from '../../hoc/Ax'
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/Ordersummery/Ordersummery'
const INGREDIENT_PRICE={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBulider extends Component
{

    state={
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0

        },
        totalprice:4,
        purchaseable:false,
        purchasing:false

    };
    addIngredientHandler=(type)=>
    {
          const oldCount=this.state.ingredient[type];
          let newCount=oldCount+1;
          let updateingredient={...this.state.ingredient};
          updateingredient[type]=newCount;
          let priceingredient=INGREDIENT_PRICE[type];
          let oldprice=this.state.totalprice;
          let newprice=oldprice+priceingredient;
          this.setState({totalprice:newprice,ingredient:updateingredient})
          this.updatedPuchaseState(updateingredient);
    }
    removeIngredientHandler=(type)=>
    {
          const oldCount=this.state.ingredient[type];
          if(oldCount<=0)
          {
              return;
          }
          let newCount=oldCount-1;
          let updateingredient={...this.state.ingredient};
          updateingredient[type]=newCount;
          let priceingredient=INGREDIENT_PRICE[type];
          let oldprice=this.state.totalprice;
          let newprice=oldprice-priceingredient;
          this.setState({totalprice:newprice,ingredient:updateingredient})
         this.updatedPuchaseState(updateingredient);
    }

    updatedPuchaseState(ingredient)
    {
        // const ingredient={...this.state.ingredient};
        const sum=Object.keys(ingredient).map(diffkey=>{
            return ingredient[diffkey]
        }).reduce((acc,no)=>{
           return acc+no;
        },0)

        this.setState({purchaseable:sum>0})
    }
    modalclose=()=>
    {
        this.setState({purchasing:false})
    }
    purchasingHandler=()=>
    {
      this.setState({purchasing:true})
    }
    purchasecontinue=()=>
        {
            alert('continue')
        }
    render()
    {
        const disabledinfo={
            ...this.state.ingredient
        }
        for(let key in disabledinfo)
        {
            disabledinfo[key]=disabledinfo[key]<=0;
            
        }
        
       console.log(this.state.purchaseable)
        return(
            <Ax>
                <Modal purchasingCondition={this.state.purchasing} clicked={this.modalclose}>
                <OrderSummery ingredients={this.state.ingredient}
                purchasecancel={this.modalclose} purchasecontinue={this.purchasecontinue}/>
                </Modal>
               <Burger ingredient={this.state.ingredient}/>
                <Buildcontrols Ingredientadd={this.addIngredientHandler}
                Ingredientremove={this.removeIngredientHandler}
                disable={disabledinfo}
                price={this.state.totalprice}
               Puchaseable={this.state.purchaseable}
               purchasingHandler={this.purchasingHandler} />
                
            </Ax>

        );
    }
}
export default BurgerBulider;