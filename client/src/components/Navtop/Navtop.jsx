import React from 'react';
import { Link } from 'react-router-dom'
import giftIcon from '../../static/icons/gift.svg'
import starIcon from '../../static/icons/star.svg'
import cl from './Navtop.module.sass';

const Navtop = () => {
  

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className={cl.main}>
          <div className={cl.questions}>
            <span className={cl.question}>Questions? Need Help?</span>
            <span className={cl.call}>Call us on (+123) 456 1500</span>
          </div>
          <div className={cl.links}>
            <Link className={cl.link} to="">
              <img src={giftIcon} alt="Pic of little present box: Icon" />
              BTP Gift Card
            </Link>
            <Link className={cl.link} to="">
              <img src={starIcon} alt="Pic of little present box: Icon" />
              BTP Gift Card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navtop;
