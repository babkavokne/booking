import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Navtop from '../../components/Navtop/Navtop';
import MyInput from '../Auth/components/MyInput/MyInput';
import OfferSearchBar from './components/OfferSearchBar/OfferSearchBar';
import OpenCountry from './components/OpenCountry/OpenCounrty'
import cl from './Home.module.sass'

const Home = () => {
  const countries = []

  return (
    <>
      <Navtop />
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className={cl.home}>
            <h1 className={cl.header}>Найдите жилье для новой поездки</h1>
            <h2 className={cl.subheader}>Ищите спецпредложения на отели, дома и другие варианты.</h2>
            <OfferSearchBar className={cl.searchbar} />
            <OpenCountry></OpenCountry>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
