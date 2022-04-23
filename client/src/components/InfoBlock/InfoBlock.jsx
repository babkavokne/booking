import React from 'react';
import Highlights from './components/Highlights/Highlights';
import OfferDetails from './components/OfferDetails/OfferDetails';
import PackageDetails from './components/PackageDetails/PackageDetails';
import cl from './InfoBlock.module.sass';

const InfoBlock = () => {
  return (
    <div className={cl.infoblock}>
      <div className={cl.header}>Package Summery</div>
      <div className={cl.main}>
        <Highlights className={cl.highlights}/>
        <OfferDetails className={cl.offerdetails}/>
        <PackageDetails className={cl.packagedetails} />
      </div>
    </div>
  );
}

export default InfoBlock;
