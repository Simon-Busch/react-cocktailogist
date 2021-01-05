import React from 'react';
import classes from './cocktail.module.css';

const Cocktail = (props) => {

  let ingredientItems = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map(
        (ingredient) => {
          return <li key={ingredient}>
            {ingredient}
            </li> 
        }
      )
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  
  return (
    <div className={classes.CocktailFlex}>
      <div className={classes.CocktailFlexLeft}>
        <img src={props.picture} alt={props.name} className={classes.CocktailImg}/>
      </div>
      <div className={classes.CocktailFlexMiddle}>
        <h2>{props.name}</h2>
        <p>🍸{props.glass}</p>
        <ul className={classes.List}>
          {ingredientItems}
        </ul>
      </div>
      <div className={classes.CocktailFlexRight}>
        <h3>Instructions:</h3>
        <p>{props.instruction}</p>
      </div>
    </div>
  );
};

export default Cocktail;
