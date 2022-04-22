import React from 'react';
import Highlights from './components/Highlights/Highlights';
import OfferDetails from './components/OfferDetails/OfferDetails';
import cl from './InfoBlock.module.sass'

const InfoBlock = () => {
  return (
    <div className={cl.infoblock}>
      <div className={cl.header}>Package Summery</div>
      <div className={cl.main}>
        <Highlights className={cl.highlights}/>
        <OfferDetails className={cl.offerdetails}/>
        <Highlights />
      </div>
    </div>
  );
}

export default InfoBlock;
