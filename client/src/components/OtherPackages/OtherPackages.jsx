import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import beach from '../../static/images/beach.jpg'
import marker from '../../static/icons/marker.svg'
import user from '../../static/icons/user.svg'
import home from '../../static/icons/home.svg'
import cl from './OtherPackages.module.sass'
import MyButton from '../MyButton/MyButton';
import InnCard from './components/InnCard/InnCard';
import ReactStars from 'react-rating-stars-component';
import $api from '../../http';

const OtherPackages = (props) => {
  const [offers, setOffers] = useState([]);

  const getOtherPackages = async () => {
    const res = await $api.get(`/openCountry/${props.offer.country}`);
    res.data.length = 7;
    console.log('res', res.data);
    setOffers(res.data.filter(offer => offer._id != props.offer._id));
  }

  useEffect(() => {
    getOtherPackages()
  }, [props])

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className={cl.otherpackages}>
          <div className={cl.header}>Other Packages</div>
          {offers.length > 0 ? (
            <div className={cl.body}>

              <div className={cl.card}>
                <div className={cl.flag}>Flash Offer</div>
                <img className={cl.inn} src={beach} alt="Image of Inn on the white sand near the sea: Image" />
                <div className={cl.info}>
                  <div className={cl.rating}>
                    <ReactStars
                      value={offers[0].rating}
                      edit={false}
                    >
                    </ReactStars>
                  </div>
                  <div className={cl.title}>{console.log(offers)}{offers[0].offerName}</div>
                  <div className={cl.descr}>
                    {offers[0].description}
                  </div>
                  <div className={cl.room}>
                    <div className={cl.item}>
                      <img src={marker} alt="Icon of map pin: Icon" />
                      {offers[0].adress}</div>
                    <div className={cl.item}>
                      <img src={user} alt="Human icon: Icon" />
                      {offers[0].guests} x {offers[0].guests > 1 ? 'Guests' : 'Guest'}</div>
                    <div className={cl.item}>
                      <img src={home} alt="Icon of little house: Icon" />
                      {offers[0].rooms} x {offers[0].rooms > 1 ? 'Rooms' : 'Room'}</div>
                  </div>
                  <div className={cl.bottom}>
                    <div className={cl.price}><span>$10,500</span>$ 8,500</div>
                    <NavLink to={`/main/${offers[0]._id}`} target="_blank" className={cl.link}><MyButton className={cl.button}>Book Now</MyButton></NavLink>
                  </div>
                </div>
              </div>
              {offers.filter((offer, i) => i > 0 && i < 5).map((offer, i) => <InnCard
                name={offer.offerName}
                key={i}
                flash
                src={`http://localhost:5000/images/${offer.images[0]}`}
                adress={offer.adress}
                guests={offer.guests}
                rooms={offer.rooms}
                price={offer.lowestPrice}
                id={offer._id}
                small></InnCard>)}
            </div>

          ) : (
            <h1>Грузимся, мужики</h1>)}
        </div>
      </div>
    </div>

  );
}

export default OtherPackages;
