import React from 'react';
import cl from './Rating.module.sass'

const Rating = (props) => {
  return (
    <div className={`${cl.rating} ${props.className}`}>
      <p>User Rattings</p>
      <div><span>4.5</span>/5</div>
    </div>
  );
}

export default Rating;
