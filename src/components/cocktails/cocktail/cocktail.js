import React from 'react';
import classes from './cocktail.module.css';

const cocktail = (props) => {
  return (
    <div className={classes.CocktailFlex}>
      <div className={classes.CocktailFlexLeft}>
        <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview" alt="cocktail img" className={classes.CocktailImg}/>
      </div>
      <div className={classes.CocktailFlexRight}>
        <p>Name</p>
        <ul>
          <li>ingredients</li>
          <li>ingredients</li>
          <li>ingredients</li>
        </ul>
        <p>instructions</p>
        <p>glass</p>
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
  