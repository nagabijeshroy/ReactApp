import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './/BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let  transformedInfredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if(transformedInfredients.length === 0){
        transformedInfredients = <p>Please start adding the ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient  type="bread-top" />
                {transformedInfredients}
            <BurgerIngredient  type="bread-bottom" />
        </div>
    );
};

export default burger;