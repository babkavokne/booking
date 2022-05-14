import React from 'react';
import cl from './MyInput.module.sass'

const MyInput = (props) => {
  return (
    <input
      className={cl.myInput}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
    />
  );
}

export default MyInput;
