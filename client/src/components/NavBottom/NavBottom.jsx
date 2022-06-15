import React from 'react';
import { Link } from 'react-router-dom';
import whiteArrow from '../../static/icons/white-arrow.svg'
import cl from './NavBottom.module.sass'

const Navbottom = (props) => {
  const showMain = () => {
    document.querySelector('.NavBottom_wrapper__s-VxU ').classList.toggle('Navbar_bottom__-ZUyw')
  }
  return (
    <>
      <div className={cl.menu} onClick={showMain}>
        Menu
        <img src={whiteArrow} alt="" />
      </div>
      <div className={`${cl.wrapper} ${props.className}`}>
        <div className='container'>
          <div className={cl.main}>
            <Link to='/' className={cl.link}>Все предложения</Link>
            <Link to='/' className={cl.link}>Отели</Link>
            <Link to='/' className={cl.link}>Активный отдых</Link>
            <Link to='/' className={cl.link}>Hotel Day Packages</Link>
            <Link to='/' className={cl.link}>Рестораны</Link>
            <Link to='/' className={cl.link}>Мероприятия</Link>
            <Link to='/aboutdeveloper' className={cl.link}>О разработчике</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbottom;
