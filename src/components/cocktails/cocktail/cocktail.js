import React from 'react';
import classes from './cocktail.module.css';

const cocktail = (props) => {
  console.log(props)

  let ingredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return <li 
        key={ingredient}>
          {ingredient}
        </li>
    //flatten the array
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  
  return (
    <div className={classes.CocktailFlex}>
      <div className={classes.CocktailFlexLeft}>
        <img src={props.picture} alt="cocktail img" className={classes.CocktailImg}/>
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

export default cocktail;


// cocktail : 
//   id:
//   name: 
//   ingredient: {}
//   picture:
//   glass:
//   instruction:
  