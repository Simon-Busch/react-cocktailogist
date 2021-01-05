import React from 'react';
import classes from './gridContainer.module.css';

const gridContainer = (props) => {
  return (
    <div className={classes.Grid}>
      {props.children}
    </div>
  );
};

export default gridContainer;