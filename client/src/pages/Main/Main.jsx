import React from 'react';
import Activities from '../../components/Activities/Activities';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import GuestReview from '../../components/GuestReview/GuestReview';
import InfoPanel from '../../components/InfoPanel/InfoPanel';
import MainOverview from '../../components/MainOverview/MainOverview';
import Navbar from '../../components/Navbar/Navbar';
import Navtop from '../../components/Navtop/Navtop'
import Newsletter from '../../components/Newsletter/Newsletter';
import OtherPackages from '../../components/OtherPackages/OtherPackages';
import cl from './Main.module.sass';

const Main = () => {
  return (
    <>
      <Navtop />
      <Navbar />
      <Breadcrumbs />
      <MainOverview />
      <InfoPanel />
      <OtherPackages />
      <GuestReview />
      <Newsletter />
      <Activities />
      <Footer />
    </>
  );
}

export default Main;
