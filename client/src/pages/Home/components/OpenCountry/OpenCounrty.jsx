import React, { useCallback, useEffect, useState } from 'react';
import $api from '../../../../http';
import cl from './OpenCountry.module.sass'

const OpenCountry = (props) => {
  const [countries, setCountries] = useState([])
  const getCountries = async () => {
    const states = await $api.get('/getCountries')
    setCountries(states.data.countries.map(country => country.country))
    console.log('states', states);
  }
  let randomCountry = useCallback(countries[Math.floor(Math.random() * countries.length)], [countries]) 
   
  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div className={cl.open}>
      {countries ? randomCountry : 'Нема'}
    </div>
  );
}

export default OpenCountry;
