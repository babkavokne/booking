import React from 'react';
import home from '../../static/icons/home.svg'
import phone from '../../static/icons/phone-call.svg'
import user from '../../static/icons/user.svg'
import cl from './Booking.module.sass';

const Booking = (props) => {
  return (
    <div className={cl.main + ' ' + props.className}>
      <div className={cl.info}>
        <div className={cl.price}>
          <span>price starts as</span>
          $ 8,500
          <span>per room / night</span>
        </div>
        <div className={cl.room}>
          <div className={cl.guests}>
            <img src={user} alt="Human icon: Icon" />
            2 x Guests
          </div>
          <div className={cl.rooms}>
            <img src={home} alt="Icon of little house: Icon" />
            1 x Room
          </div>
        </div>
      </div>
      <div className={cl.number}>
        Quick Booking
        <div>
          <img src={phone} alt="Icon of handset: Icon" />
          12100
        </div>
      </div>
      <button>View Other Options</button>
    </div>
  );
}

export default Booking;
