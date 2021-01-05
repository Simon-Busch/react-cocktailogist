import React from 'react';
import classes from './CocktailContainer.module.css';

const gridContainer = (props) => {
  return (
    <div className={classes.Container}>
      {props.children}
    </div>
  );
};

export default gridContainer;