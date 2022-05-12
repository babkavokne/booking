import React from 'react';
import inn from '../../../../static/images/delmare.jpg'
import marker from '../../../../static/icons/marker.svg'
import user from '../../../../static/icons/user.svg'
import home from '../../../../static/icons/home.svg'
import cl from './InnCard.module.sass'
import MyButton from '../../../MyButton/MyButton';

const InnCard = () => {
  return (
    <div className={cl.inncard}>
      <div className={cl.flag}>Flash Offer</div>
      <img className={cl.innPicture} src={inn} alt="Image of luxury inn with pool and palms: Image" />
      <div className={cl.info}>
        <div className={cl.title}>LUX* Belle Mare</div>
        <div className={cl.room}>
          <div className={cl.item}>
            <img src={marker} alt="Icon of map pin: Icon" />
            1749 Wheeler Ridge  Delaware</div>
          <div className={cl.item}>
            <img src={user} alt="Human icon: Icon" />
            2 x Guests</div>
          <div className={cl.item}>
            <img src={home} alt="Icon of little house: Icon" />
            1 x Room</div>
        </div>
        <div className={cl.bottom}>
          <div className={cl.price}><span>$10,500</span>$ 8,500</div>
          <MyButton className={cl.button}>Book Now</MyButton>
        </div>
      </div>
    </div>
  );
}

export default InnCard;
