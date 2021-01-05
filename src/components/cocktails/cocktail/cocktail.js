import React from 'react';
import classes from './cocktail.module.css';

const Cocktail = (props) => {
  // console.log(props)

  let ingredientItems = Object.keys(props.ingredients)
    .map(ingredientKey => { // ingredientKey is the ingredient actually (salad ... )
      return [...Array(props.ingredients[ingredientKey])].map(
        // _ as we don't mind about it, we just need the index
        (_, index) => {
          return <li key={ingredientKey+index}>
            {ingredientKey}
            </li> 
        }
      )
    //flatten the array
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  
  return (
    <div className={classes.CocktailFlex}>
      <div className={classes.CocktailFlexLeft}>
        <img src={props.picture} alt={props.name} className={classes.CocktailImg}/>
      </div>
      <div className={classes.CocktailFlexRight}>
        <p>{props.name}</p>
        <ul>
          {ingredientItems}
        </ul>
        <p>{props.instructions}</p>
        <p>{props.glass}</p>
      </div>
    </div>
  );
};

export default Cocktail;
