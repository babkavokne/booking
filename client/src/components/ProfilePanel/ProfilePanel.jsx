import React from 'react';
import avatar from '../../static/images/man-profile.svg'
import arrow from '../../static/icons/chevron-down.svg'
import cl from './ProfilePanel.module.sass'

const Profilepanel = () => {
  return (
    <div className={cl.panel}>
      <img src={avatar} alt="User avatar: Image" className={cl.avatar}/>
      <span>Nathan</span>
      <img src={arrow} alt="Panel arrow: Icon" />
    </div>
  );
}

export default Profilepanel;
