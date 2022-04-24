import React from 'react';
import cl from './PackageDetails.module.sass';

const PackageDetails = (props) => {
  return (
    <div className={`${cl.packagedetails} ${props.className}`}>
      <div className={cl.header}>Package Summery Details</div>
      <div className={cl.body}>
        <div className={cl.mainline}>
          <div className={cl.block}>
            <div className={cl.title}>Purchase Inclusions</div>
            <div className={cl.item}>Room as per selection</div>
            <div className={cl.item}>Half Board or All Inclusive Meal Plan</div>
            <div className={cl.item}>Complimentary Land & Water activities</div>
            <div className={cl.item}>Child Under 11 years old stays free</div>
            <div className={cl.item}>Free Wi-Fi</div>
            <div className={cl.item}>Free Secure Parking</div>
          </div>
          <div className={cl.block}>
            <div className={cl.title}>Complimentary Land Based Activities</div>
            <div className={cl.item}>Gym</div>
            <div className={cl.item}>Beach Volley</div>
            <div className={cl.item}>Table tennis</div>
            <div className={cl.item}>Soccer balls</div>
            <div className={cl.item}>Yoga</div>
            <div className={cl.item}>Unlimited access to driving range</div>
          </div>
          <div className={cl.block}>
            <div className={cl.title}>Complimentary Water Based Activities</div>
            <div className={cl.item}>Water skiing</div>
            <div className={cl.item}>Windsurfing</div>
            <div className={cl.item}>Pedal boats</div>
            <div className={cl.item}>Kayaking</div>
            <div className={cl.item}>Aqua Gym</div>
            <div className={cl.item}>Glass bottom boat trips</div>
          </div>
        </div>
        <div className={cl.subline}>
          <div className={cl.block}>
            <div className={cl.title}>Meal Plan Available</div>
            <div className={cl.item}>Half Board</div>
            <div className={cl.item}>All Inclusive</div>
          </div>
          <div className={cl.block}>
            <div className={cl.title}>Entertainment</div>
            <div className={cl.item}>Live music</div>
            <div className={cl.item}>DJ & Mauritian Dance Show</div>
          </div>
          <div className={cl.block}>
            <div className={cl.title}>Check In & Check Out</div>
            <div className={cl.item}>Check In Time 14:00</div>
            <div className={cl.item}>Check Out Time 11:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
