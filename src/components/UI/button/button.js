import React from 'react';
import classes from './button.module.css';

const button = (props) => {
  const classButton = [classes.Button];
  classButton.push(props.btnType)
  return (
    <div>
      <button onClick={props.clicked} 
      className={[classes.Button, classes[props.btnType]].join(' ')}>{props.text}</button>
    </div>
  );
};

export default button;