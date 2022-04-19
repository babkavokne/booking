import React from 'react';
import Booking from '../Booking/Booking';
import Map from '../Map/Map';
import Slider from '../Slider/Slider';
import cl from './MainOverview.module.sass'

const MainOverview = () => {
  return (
    <div className='wrapper'>
      <div className='container'>

        <div className={cl.header}>
          <div className={cl.left}>
            <div className={cl.stars}>
              //текстовая заглушка. здесь будут рейтинг-звёзды
            </div>
            <div className={cl.mainline}>
              <div className={cl.name}>
                GRAND HILTON HOTEL
              </div>
              <div className={cl.offer}>Flash Offer</div>
            </div>
            <div className={cl.subline}>
              Half-Board/ All Inclusive + Complimentary Activities + Child Stays Free
            </div>
          </div>
          <div className={cl.rating}>
            <p>User Rattings</p>
            <div><span>4.5</span>/5</div>
          </div>
        </div>

        <div className={cl.main}>
            <Slider className={cl.slider}/>
            <Booking className={cl.booking}/>
            <Map className={cl.map}/>
        </div>
      </div>
    </div>
  );
}

export default MainOverview;
