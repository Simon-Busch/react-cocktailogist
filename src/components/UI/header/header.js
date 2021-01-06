import React from 'react';
import classes from './header.module.css'

const header = () => {
  return (
    <div className={classes.Header}>
      <img src="https://images.unsplash.com/photo-1545674876-20034d8237c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
        alt="cocktail"  
        className={classes.Image}/>
      <div className={classes.TitleBox}>
        <div>
          <h1 className={classes.Title}>Welcome to Cocktailogist</h1>
        </div>
        <div>
          <p className={classes.Subtitle}>Find your cocktail</p>
        </div>
      </div>
    </div>
  );
};

export default header;