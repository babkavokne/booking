import React, { useCallback, useEffect, useState } from 'react';
import $api from '../../../../http';
import cl from './OpenCountry.module.sass'

const OpenCountry = (props) => {
  const [countries, setCountries] = useState([])
  const [country, setCountriy] = useState()


  const getCountries = async () => {
    const states = await $api.get('/getCountries/');
    console.log('states', states);
    setCountries(states.data.countries.map(country => country.country));
    setCountriy(countries[Math.floor(Math.random() * countries.length)]);
    const data = 'Russia'
    const res = await $api.get(`/openCountry/${data}`);

    console.log('getOffers res', res);
    console.log('randomCountry', country);
  }

  console.log('countries', countries);

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div className={cl.open}>
      {countries.length == 0 ? country : 'Нема'}
    </div>
  );
}

export default OpenCountry;
