import React from 'react';
import inn from '../../../../static/images/delmare.jpg'
import marker from '../../../../static/icons/marker.svg'
import user from '../../../../static/icons/user.svg'
import home from '../../../../static/icons/home.svg'
import cl from './InnCard.module.sass'
import MyButton from '../../../MyButton/MyButton';
import { NavLink } from 'react-router-dom';

const InnCard = (props) => {
  return (
    <div className={`${cl.inncard} ${props.className}`}>
      {props.flash ? <div className={cl.flag}>Flash Offer</div> : null}
      <img className={`${cl.innPicture} ${props.small ? cl.small : null}`} src={props.src} alt="Image of luxury inn with pool and palms: Image" />
      <div className={`${cl.info} ${props.small ? cl.small : null}`}>
        <div className={cl.title}>{props.name}</div>
        <div className={cl.room}>
          <div className={cl.item}>
            <img src={marker} alt="Icon of map pin: Icon" />
            {props.adress}</div>
          <div className={cl.item}>
            <img src={user} alt="Human icon: Icon" />
            {props.guests} x {props.guests > 1 ? 'Guests' : 'Guest'}</div>
          <div className={cl.item}>
            <img src={home} alt="Icon of little house: Icon" />
            {props.rooms} x {props.rooms > 1 ? 'Rooms' : 'Room'}</div>
        </div>
        <div className={cl.bottom}>
          <div className={cl.price}><span>$10,500</span>$ {props.price}</div>
          <NavLink to={`/main/${props.id}`} target="_blank" className={cl.link}><MyButton className={cl.button}>Book Now</MyButton></NavLink>  
        </div>
      </div>
    </div>
  );
}

export default InnCard;
