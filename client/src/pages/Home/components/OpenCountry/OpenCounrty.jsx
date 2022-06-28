import React, { useCallback, useEffect, useState } from 'react';
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
    console.log('document.querySelector(`.${cl.inner}`).style.marginLeft', document.querySelector(`.${cl.inner}`).style.marginLeft.slice(0, -2));
    console.log('document.querySelector(`.${cl.inner}`).style.marginRight', document.querySelector(`.${cl.inner}`).style.marginLeft.slice(0, -2));
    document.querySelector(`.${cl.card}`).style.marginLeft = +(document.querySelector(`.${cl.card}`).style.marginLeft.slice(0, -2)) + 100 +`px`;
    // document.querySelector(`.${cl.card}`).style.marginRight = +(document.querySelector(`.${cl.card}`).style.marginRight.slice(0, -2)) - 100 +`px`;
  }

  const prevImage = () => {
    console.log('document.querySelector(`.${cl.inner}`).style.marginLeft', document.querySelector(`.${cl.inner}`).style.marginLeft.slice(0, -2));
    console.log('document.querySelector(`.${cl.inner}`).style.marginRight', document.querySelector(`.${cl.inner}`).style.marginLeft.slice(0, -2));
    document.querySelector(`.${cl.card}`).style.marginLeft = +(document.querySelector(`.${cl.card}`).style.marginLeft.slice(0, -2)) - document.querySelector(`.${cl.inner}`).clientWidth +`px`;
    // document.querySelector(`.${cl.card}`).style.marginRight = +(document.querySelector(`.${cl.card}`).style.marginRight.slice(0, -2)) + 100 +`px`;
  }

  return (
    <>
      {offers ? (
        <div className={cl.open}>
          <h1>{offers[0].country} - откройте для себя эту страну!</h1>
          <h3>В этих популярных местах вы точно найдете что-то для себя</h3>
          <div className={cl.slider}>
            <div className={cl.inner}>
              {offers.map((offer, i) =>
                <InnCard className={cl.card}
                  name={offer.offerName}
                  key={i}
                  flash
                  src={`http://localhost:5000/images/${offer.images[0]}`}
                  adress={offer.adress}
                  guests={offer.guests}
                  rooms={offer.rooms}
                  price={offer.lowestPrice}
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
