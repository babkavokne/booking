import React from 'react';
import cl from './MyInput.module.sass'

const MyInput = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder}/>
  );
}

export default MyInput;
