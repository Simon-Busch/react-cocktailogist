import React from 'react';
import classes from './input.module.css'

const input = (props) => {
  return (
    <div className={classes.Input}>
      {/* <label className={classes.Label}>{props.label}</label> */}
      <select className={classes.InputElement} onChange={props.change} >
        <option value="cocktail">
          Cocktail
        </option>
        <option value="mojito">
          Mojito
        </option>
        <option value="champagne">
          Champagne
        </option>
        <option value="rum">
          Rum
        </option>
        <option value="gin">
          Gin
        </option>
        <option value="whisky">
          Whisky
        </option>
        <option value="banana">
          Banana
        </option>
        <option value="vodka">
          Vodka
        </option>
        <option value="raspberry">
          Raspberry
        </option>
        <option value="strawberry">
          Strawberry
        </option>
        <option value="absinth">
          Absinth
        </option>
      </select>
    </div>
  );
};

export default input;