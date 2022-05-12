import React from 'react';
import cl from './MyButton.module.sass';

const MyButton = (props) => {
  return (
    <div className={`${cl.mybutton} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default MyButton;
