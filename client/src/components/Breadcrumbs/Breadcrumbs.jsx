import React from 'react';
import cl from './Breadcrumbs.module.sass'

const Breadcrumbs = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className={cl.breadcrumbs}>
          Home / Flash Offers / Grand Hilton Hotel
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
