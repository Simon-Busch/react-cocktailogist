import React from 'react';
import classes from './cocktails.module.css';
import { withRouter } from 'react-router-dom'
// import Cocktail from './cocktail/cocktail';


const cocktails = (props) => {
  // console.log(props);
  
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
      <div className={classes.CocktailTop}>
        <img src={props.picture} alt={props.name} className={classes.CocktailImg}/>
      </div>
      <div className={classes.CocktailBottom}>
        <h2>
        {props.name}
        </h2>
      </div>
      {/* <Cocktail {...props}/> */}
    </div>
  )
};

export default withRouter(cocktails);