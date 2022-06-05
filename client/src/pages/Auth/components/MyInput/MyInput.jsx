import React from 'react';
import cl from './MyInput.module.sass'

const MyInput = (props) => {
  return (
    <input
      className={`${cl.myInput} ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      id={props.id}
    />
  );
}

export default MyInput;
