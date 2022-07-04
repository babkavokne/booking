import React from 'react';
import home from '../../static/icons/home.svg'
import phone from '../../static/icons/phone-call.svg'
import user from '../../static/icons/user.svg'
import MyButton from '../MyButton/MyButton';
import cl from './Booking.module.sass';

const Booking = (props) => {
  return (
    <div className={cl.main + ' ' + props.className}>
      <div className={cl.info}>
        <div className={cl.price}>
          <span>price starts as</span>
          $ {props.offer.lowestPrice}
          <span>per room / night</span>
        </div>
        <div className={cl.room}>
          <div className={cl.rooms}>
            <img src={user} alt="Human icon: Icon" />
            {props.offer.guests} x { props.offer.guests > 1 ? 'Guests' : 'Guest'} 
          </div>
          <div className={cl.rooms}>
            <img src={home} alt="Icon of little house: Icon" />
            {props.offer.rooms} x {props.offer.rooms > 1 ? 'Rooms' : 'Room'} 
          </div>
        </div>
      </div>
      <div className={cl.number}>
        Quick Booking
        <div>
          <img src={phone} alt="Icon of handset: Icon" />
          {props.offer.phone}
        </div>
      </div>
      <MyButton>View Other Option</MyButton>
    </div>
  );
}

export default Booking;
