import React from 'react';
import classes from './cocktails.module.css';
import { withRouter, Switch, Route, Link } from 'react-router-dom'
// import Cocktail from './cocktail/cocktail';

const cocktails = (props) => {
  // console.log(props);
  return (
    <Link to={'/cocktails/' + props.id}>
      <div className={classes.CocktailFlex}>
        <div className={classes.CocktailTop}>
          <img src={props.picture} alt={props.name} className={classes.CocktailImg}/>
        </div>
        <div className={classes.CocktailBottom}>
          <h2>
          {props.name}
          </h2>
        </div>
      </div>
    </Link>
  )
};

export default withRouter(cocktails);