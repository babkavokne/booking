import React from 'react';
import { NavLink } from 'react-router-dom';
import InfoBlock from '../InfoBlock/InfoBlock';
import cl from './InfoPanel.module.sass'

const InfoPanel = () => {
  function addActive(e) {
    e.target.classList.add('InfoPanel_isActive__bIYfs')
  }

  return (
    <div className="wrapper">
      <div className='container'>
        <div className={cl.infopanel}>
          <div className={cl.nav} onClick={addActive}>
            <NavLink className={`${cl.link} ${cl.isActive}`} to='/'>Package Summery</NavLink>
            <NavLink className={cl.link } to='/'>Hotel Information</NavLink>
            <NavLink className={cl.link } to='/'>Rooms</NavLink>
            <NavLink className={cl.link } to='/'>Facilities & Activities</NavLink>
            <NavLink className={cl.link } to='/'>Dining & Entertainment</NavLink>
            <NavLink className={cl.link } to='/'>Reviews</NavLink>
            <NavLink className={cl.link } to='/'>Questions & Answers</NavLink>
          </div>
          <InfoBlock />
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;
