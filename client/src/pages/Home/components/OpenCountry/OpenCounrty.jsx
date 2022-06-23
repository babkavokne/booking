import React, { useCallback, useEffect, useState } from 'react';
import MyLoader from '../../../../components/MyLoader/MyLoader';
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

  return (
    <div className={cl.open}>
      {offers ? (
        <div className={cl.open}>
          <h1>{offers[0].country} - откройте для себя эту страну!</h1>
          {offers.map((offer, i) => <div key={i}>{offer.country}</div>)}
        </div>
      ) : (
        <MyLoader />)}
    </div>
  );
}

export default OpenCountry;
