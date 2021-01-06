import React from 'react';
import classes from './cocktail.module.css';
import { withRouter } from 'react-router-dom';

const Cocktail = (props) => {
  console.log(props)
  console.log('coucou') 

  // let ingredientItems = Object.keys(props.ingredients)
  //   .map(ingredientKey => {
  //     return [...Array(props.ingredients[ingredientKey])].map(
  //       (ingredient) => {
  //         return <li key={ingredient}>
  //           {ingredient}
  //           </li> 
  //       }
  //     )
  //   }).reduce((arr, el) => {
  //     return arr.concat(el)
  //   }, [])

  return (
    // <div className={classes.CocktailFlex}>
    //   <div className={classes.CocktailFlexTop}>
    //     <img src={props.picture} alt={props.name} className={classes.CocktailImg}/>
    //   </div>
    //   <div className={classes.CocktailFlexBottom}>
    //     <div className={classes.CocktailFlexMiddle}>
    //       <h2>{props.name}</h2>
    //       <p>🍸{props.glass}</p>
    //       <ul className={classes.List}>
    //         {ingredientItems}
    //       </ul>
    //     </div>
    //     <div className={classes.CocktailFlexRight}>
    //       <h3>Instructions:</h3>
    //       <p><em>{props.instruction}</em></p>
    //     </div>
    //     <div className={classes.Button}>
    //       <button onClick={props.deleteCocktail} className={classes.ButtonDelete}> ❌ </button>
    //       </div>
    //   </div>
    // </div>
    <h1>hello</h1>
  );
};

export default withRouter(Cocktail);
