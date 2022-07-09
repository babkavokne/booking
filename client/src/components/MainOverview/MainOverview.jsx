import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import Map from '../Map/Map';
import Slider from '../Slider/Slider';
import Flash from './components/Flash/Flash'
import Rating from './components/rating/Rating'
import ReactStars from "react-rating-stars-component";
import cl from './MainOverview.module.sass'
import $api from '../../http';

const MainOverview = (props) => {
  const [rating, setRating] = useState(props.offer.rating)
  
  const changeRating = async (newRating) => {
    const res = await $api.post('/changeRating', {newRating, id: props.offer._id});
    setRating(res.data.data);
  }

  useEffect(() => {
    setRating(props.offer.rating) 
  }, [props.offer.rating]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className={cl.header}>
          <div className={cl.left}>
            <div className={cl.stars}>
              <ReactStars
                count={5}
                onChange={changeRating}
                size={24}
                color2={'#ffd700'}
                isHalf={true}
              />
            </div>
            <div className={cl.mainline}>
              <div className={cl.name}>
                {props.offer.offerName}
              </div>
              <div className={cl.additions}>
                <Flash />
                <Rating className={cl.mobile} rating={rating}/>
              </div>
            </div>
            <div className={cl.subline}>
              Half-Board/ All Inclusive + Complimentary Activities + Child Stays Free
            </div>
          </div>
          <Rating className={cl.hidden} rating={rating} />
        </div>
        <div className={cl.main}>
          <Slider className={cl.slider} images={props.offer.images} />
          <Booking className={cl.booking} offer={props.offer}/>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default MainOverview;
