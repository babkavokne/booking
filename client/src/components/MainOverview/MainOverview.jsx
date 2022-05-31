import React from 'react';
import Booking from '../Booking/Booking';
import Map from '../Map/Map';
import Slider from '../Slider/Slider';
import Flash from './components/Flash/Flash'
import Rating from './components/rating/Rating'
import ReactStars from 'react-stars'
import cl from './MainOverview.module.sass'

const MainOverview = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <div className='wrapper'>
      <div className='container'>

        <div className={cl.header}>
          <div className={cl.left}>
            <div className={cl.stars}>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'}
                value={2.5}
              />
            </div>
            <div className={cl.mainline}>
              <div className={cl.name}>
                GRAND HILTON HOTEL
              </div>
              <div className={cl.additions}>
                <Flash />
                <Rating className={cl.mobile} />
              </div>
            </div>
            <div className={cl.subline}>
              Half-Board/ All Inclusive + Complimentary Activities + Child Stays Free
            </div>
          </div>
          <Rating className={cl.hidden} />
        </div>
        <div className={cl.main}>
          <Slider className={cl.slider} />
          <Booking className={cl.booking} />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default MainOverview;
