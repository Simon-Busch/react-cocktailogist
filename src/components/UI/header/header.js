import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div className={classes.Header}>
    <Link to='/favourite' className={classes.Link}>Favourite</Link>
      <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
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