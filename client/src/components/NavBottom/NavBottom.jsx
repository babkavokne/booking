import React from 'react';
import { Link } from 'react-router-dom';
import cl from './NavBottom.module.sass'

const Navbottom = (props) => {
  return (
    <div className={`${cl.wrapper} ${props.className}`}>
      <div className='container'>
        <div className={cl.main}>
          <Link to='/' className={cl.link}>All Deals</Link>
          <Link to='/' className={cl.link}>Hotels</Link>
          <Link to='/' className={cl.link}>Activities</Link>
          <Link to='/' className={cl.link}>Hotel Day Packages</Link>
          <Link to='/' className={cl.link}>Restaurants</Link>
          <Link to='/' className={cl.link}>Events</Link>
          <Link to='/' className={cl.link}>Rodrigues</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbottom;
