import React from 'react';
import classes from './input.module.css'

const input = (props) => {
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      <select className={classes.InputElement} >
        <option value="cocktail">
          cocktail
        </option>
        <option value="mojito">
          mojito
        </option>
        <option value="champagne">
          champagne
        </option>
      </select>
    </div>
  );
};

export default input;