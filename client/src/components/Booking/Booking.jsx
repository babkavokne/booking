import React from 'react';
import cl from './Booking.module.sass';

const Booking = () => {
  return (
    <div className={cl.main}>
      <div className={cl.info}>
        <div className={cl.price}>
          <span>price starts as</span>
          $ 8,500
          <span>per room / night</span>
        </div>
        <div className={cl.room}>
          <div className={cl.guests}>
            <img src="" alt="" />
            2 x Guests
          </div>
          <div className={cl.rooms}>
            <img src="" alt="" />
            1 x Room
          </div>
        </div>
      </div>
      <div className={cl.number}>
        Quick Booking
        <div>
          <img src="" alt="" />
          12100
        </div>
      </div>
      <button>View Other Options</button>
    </div>
  );
}

export default Booking;
