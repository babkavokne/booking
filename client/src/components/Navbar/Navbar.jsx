import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePanel from '../ProfilePanel/ProfilePanel';
import Searchbar from '../SearchBar/SearchBar';
import NavBottom from '../NavBottom/NavBottom';
import cart from '../../static/icons/shopping-cart.svg'
import cl from './Navbar.module.sass'

const Navbar = () => {
  return (
    <>
      <div className={cl.wrapper}>
        <div className='container'>
          <div className={cl.main}>
            <div className={cl.left}>
              <Link to='/' className={cl.link}>
                Best <span>tour</span> plan
              </Link>
              <Searchbar />
            </div>
            <div className={cl.right}>
              <ProfilePanel />
            </div>
          </div>
        </div>
      </div>
      <NavBottom className={cl.bottom}/>
    </>


  );
}

export default Navbar;
