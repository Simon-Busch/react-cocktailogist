import React from 'react';
import classes from './cocktail.module.css';

const Cocktail = (props) => {
  // console.log(props)

  let ingredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return <li 
        key={ingredient}>
          {ingredient}
        </li>
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
          {ingredients}
        </ul>
        <p>{props.instructions}</p>
        <p>{props.glass}</p>
      </div>
    </div>
  );
};

export default Cocktail;
