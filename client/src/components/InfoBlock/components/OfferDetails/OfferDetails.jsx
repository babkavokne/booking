import React from 'react';
import cl from './OfferDetails.module.sass'

const OfferDetails = (props) => {
  return (
    <div className={`${cl.offerdetails} ${props.className}`}>
      <div className={cl.header}>Offer Details</div>
      <div className={cl.body}>
        <div className={cl.item}>
          Benefit from a special discounted CHILL’OUT OFFER at Grand Hilton Hotel.
          <div className={cl.footer}>* Valid until 30 April 2020</div>
        </div>
        <div className={cl.date}>10th March - 30th April 2020</div>
      </div>
    </div>
  );
}

export default OfferDetails;
