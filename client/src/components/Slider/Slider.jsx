import React from 'react';
import inn from '../../static/images/inn+pool.jpg'
import cl from './Slider.module.sass'

const Slider = () => {
  return (
    <div className={cl.slider}>
      <img src={inn} alt="Inn with pool: Image" />
    </div>
  );
}

export default Slider;
