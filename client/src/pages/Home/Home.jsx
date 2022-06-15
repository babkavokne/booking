import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Navtop from '../../components/Navtop/Navtop';
import cl from './Home.module.sass'

const Home = () => {
  return (
    <>
      <Navtop />
      <Navbar />
      <Footer />
    </>
  );
}

export default Home;
