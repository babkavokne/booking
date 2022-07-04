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
  console.log('useParams(id)', id);

  const getOffer = async () => {
    const res = await $api.get(`/getOffer/${id}`)
    setOffer(res.data)
  }

  console.log('offer', offer);
  useEffect(() => {
    getOffer()
  }, [])

  return (
    <>
      <Navtop />
      <Navbar />
      <Breadcrumbs />
      <MainOverview offer={offer}/>
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
