import React from 'react';
import beach from '../../static/images/beach.jpg'
import marker from '../../static/icons/marker.svg'
import user from '../../static/icons/user.svg'
import home from '../../static/icons/home.svg'
import cl from './OtherPackages.module.sass'
import MyButton from '../MyButton/MyButton';

const OtherPackages = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className={cl.otherpackages}>
          <div className={cl.header}>Other Packages</div>
          <div className={cl.body}>
            <div className={cl.card}>
              <div className={cl.flag}>Flash Offer</div>
              <img src={beach} alt="Image of Inn on the white sand near the sea: Image" />
              <div className={cl.info}>
                <div className={cl.rating}>
                  //заглушка звёздочек
                </div>
                <div className={cl.title}>Hotel Blue Haven</div>
                <div className={cl.descr}>
                  Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do
                </div>
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
                  <MyButton text="Book Now" className={cl.button} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default OtherPackages;
