import React from 'react';
import cl from './Highlights.module.sass';

const Highlights = (props) => {
  return (
    <div className={`${cl.highlights} ${props.className}`}>
      <div className={cl.header}>Package Highlights</div>
      <div className={cl.body}>
        <div className={cl.item}>Half Board/ All Inclusive</div>
        <div className={cl.item}>Luxurious 5-Star Hotel</div>
        <div className={cl.item}>Child Under 11 Years Stay Free</div>
        <div className={cl.item}>Banyan An Adult Only Zone</div>
        <div className={cl.item}>LUX* Me Spa</div>
      </div>
    </div>
  );
}

export default Highlights;
