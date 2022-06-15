import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Navtop from '../../components/Navtop/Navtop';
import OfferSearchBar from './components/OfferSearchBar/OfferSearchBar';
import cl from './Home.module.sass'

const Home = () => {
  return (
    <>
      <Navtop />
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className={cl.home}>
            <OfferSearchBar className={cl.searchbar} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
