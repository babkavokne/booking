import React from 'react';
import cl from './Rating.module.sass'

const Rating = (props) => {
  return (
    <div className={`${cl.rating} ${props.className}`}>
      <p>User Ratings</p>
      <div><span>{props.rating}</span>/5</div>
    </div>
  );
}

export default Rating;
