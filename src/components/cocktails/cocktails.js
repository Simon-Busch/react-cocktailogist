import React, {Fragment} from 'react';
import classes from './cocktails.module.css';
import { withRouter, Link } from 'react-router-dom';

const cocktails = (props) => {
  return (
    <Fragment>
      <Link to={`/${props.id}`} className={classes.Link}>
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
