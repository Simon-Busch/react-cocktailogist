import React, {Fragment} from 'react';
import classes from './cocktails.module.css';
import { withRouter, Switch, Route, Link } from 'react-router-dom'
import Cocktail from './cocktail/cocktail';

const cocktails = (props) => {
  // console.log(props);

  return (
    <Fragment>
      <Link to={`/${props.id}`}>
      {/* <Link to= {{
        pathname: '/12418',
        state: {
          cocktails: props
        }
      }}> */}
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
    </Fragment>
  )
};

export default withRouter(cocktails);