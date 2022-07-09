import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import $api from '../../http';
import cl from './Main.module.sass';

const Main = () => {
  const { id } = useParams()
  const [offer, setOffer] = useState({})

  const getOffer = async () => {
    const res = await $api.get(`/getOffer/${id}`)
    res.data.rating = res.data.rating.toFixed(1);
    setOffer(res.data)
  }

  useEffect(() => {
    getOffer()
  }, [])

  return (
    <>
      {offer ? (
        <>
          <Navtop />
          <Navbar />
          <Breadcrumbs />
          <MainOverview offer={offer} />
          <InfoPanel />
          <OtherPackages offer={offer} />
          <GuestReview />
          <Newsletter />
          <Activities />
          <Footer />
        </>
      ) : (
        <h1>Оформляем спишь</h1>
      )}

    </>
  );
}

export default Main;
