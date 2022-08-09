import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import MyLoader from '../../../../components/MyLoader/MyLoader';
import InnCard from '../../../../components/OtherPackages/components/InnCard/InnCard';
import next from '../../../../static/icons/arrow-right.svg'
import prev from '../../../../static/icons/arrow-left.svg'
import $api from '../../../../http';
import cl from './OpenCountry.module.sass'

const OpenCountry = (props) => {
  const [offers, setOffers] = useState()
  // const [country, setCountry] = useState()


  const getCountries = async () => {
    const states = await $api.get('/getCountries/');
    console.log('states', states);
    const countries = states.data.countries.map(country => country.country)
    console.log('countries', countries);

    const random = countries[Math.floor(Math.random() * countries.length)]
    console.log('random', random);
    const res = await $api.get(`/openCountry/${random}`);
    console.log('getOffers res', res.data);


    setOffers(res.data)
  }

  useEffect(() => {

    getCountries()
  }, [])

  const nextImage = () => {
    const cards = document.querySelectorAll(`.${cl.card}`)
    const inner = document.querySelector(`.${cl.inner}`)
    cards[0].style.marginLeft = +cards[0].style.marginLeft.slice(0, -2) - inner.offsetWidth + `px`;

    if (cards.length < 4) {
      cards[0].style.marginLeft = 0
      return
    }

    console.log('cards.length - 4) * cards[0].offsetWidth', (cards.length - 4) * cards[0].offsetWidth);
    console.log(((cards.length - 4) * cards[0].offsetWidth + cards.length * inner.style.columnGap.slice(0, -2)));

    if (-cards[0].style.marginLeft.slice(0, -2) >= ((cards.length - 4) * cards[0].offsetWidth + cards.length * inner.style.columnGap.slice(0, -2))) {
      console.log('1');
      cards[0].style.marginLeft = -((cards.length - 4) * cards[0].offsetWidth + (cards.length - 4) * inner.style.columnGap.slice(0, -2)) + 'px'
    }
  }

  const prevImage = () => {
    const card = document.querySelector(`.${cl.card}`)
    const inner = document.querySelector(`.${cl.inner}`)
    card.style.marginLeft = +card.style.marginLeft.slice(0, -2) + inner.offsetWidth + `px`;
    if (+card.style.marginLeft.slice(0, -2) > 0) {
      card.style.marginLeft = 0
    }
  }

  return (
    <>
      {offers ? (
        <div className={cl.open}>
          <h1>{offers[0].country} - откройте для себя эту страну!</h1>
          <h3>В этих популярных местах вы точно найдете что-то для себя</h3>
          <div className={cl.slider}>
            <div className={cl.inner} style={{ columnGap: '16px' }}>
              {offers.map((offer, i) =>
                <InnCard className={cl.card}
                  key={i}
                  name={offer.offerName}
                  flash
                  src={`http://localhost:5000/images/${offer.images[0]}`}
                  adress={offer.adress}
                  guests={offer.guests}
                  rooms={offer.rooms}
                  price={offer.lowestPrice}
                  id={offer._id}
                  small
                />
              )}
            </div>
          </div>
          <div className={cl.next}><img src={next} onClick={nextImage} alt="" /></div>
          <div className={cl.prev}><img src={prev} onClick={prevImage} alt="" /></div>
        </div>
      ) : (
        <MyLoader />)}
    </>
  );
}

export default OpenCountry;
