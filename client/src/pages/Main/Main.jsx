import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import InfoPanel from '../../components/InfoPanel/InfoPanel';
import MainOverview from '../../components/MainOverview/MainOverview';
import Navbar from '../../components/Navbar/Navbar';
import Navtop from '../../components/Navtop/Navtop'
import cl from './Main.module.sass';

const Main = () => {
  return (
    <>
      <Navtop />
      <Navbar />
      <Breadcrumbs />
      <MainOverview />
      <InfoPanel />
    </>
  );
}

export default Main;
