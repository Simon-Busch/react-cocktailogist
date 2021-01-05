import React from 'react';

const button = (props) => {
  return (
    <div>
      <button onClick={props.clicked} >{props.text}</button>
    </div>
  );
};

export default button;