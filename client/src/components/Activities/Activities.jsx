import React from 'react';
import MyButton from '../MyButton/MyButton'
import activ1 from '../../static/images/activities-1.jpg'
import activ2 from '../../static/images/activities-2.jpg'
import activ3 from '../../static/images/activities-3.jpg'
import activ4 from '../../static/images/activities-4.jpg'
import cl from './Activities.module.sass'

const Activities = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className={cl.activities}>
          <div className={cl.header}>Other Activities</div>
          <div className={cl.body}>
            <div className={cl.item}>
              <img src={activ1} alt="" />
              <div className={cl.info}>
                <div className={cl.title}>
                  The curious corner
                  of chamarel
                </div>
                <MyButton className={cl.button}>
                  Book Now
                </MyButton>
              </div>
            </div>
            <div className={cl.item}>
              <img src={activ2} alt="" />
              <div className={cl.info}>
                <div className={cl.title}>
                  Gymkhana club golf
                  course
                </div>
                <MyButton className={cl.button}>
                  Book Now
                </MyButton>
              </div>
            </div>
            <div className={cl.item}>
              <img src={activ3} alt="" />
              <div className={cl.info}>
                <div className={cl.title}>
                  Tamarind falls hiking
                  trip - full day
                </div>
                <MyButton className={cl.button}>
                  Book Now
                </MyButton>
              </div>
            </div>
            <div className={cl.item}>
              <img src={activ4} alt="" />
              <div className={cl.info}>
                <div className={cl.title}>
                  The blue marine discovery
                  quest
                </div>
                <MyButton className={cl.button}>
                  Book Now
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
