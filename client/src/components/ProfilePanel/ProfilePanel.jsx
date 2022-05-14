import React from 'react';
import avatar from '../../static/images/man-profile.svg'
import camera from '../../static/icons/icon-camera200.png'
import arrow from '../../static/icons/chevron-down.svg'
import cart from '../../static/icons/shopping-cart.svg'
import cl from './ProfilePanel.module.sass'
import MyButton from '../MyButton/MyButton';
import { Link } from 'react-router-dom';

const Profilepanel = () => {
  let isAuth = false
  return (
    <>
      {isAuth ? <img src={cart} alt="Icon of shopping-cart: Icon" /> : null}
      <div className={cl.panel}>
        {isAuth ? (
          <>
            <img src={avatar} alt="User avatar: Image" className={cl.avatar} />
            <span>Nathan</span>
            <img src={arrow} alt="Panel arrow: Icon" />
          </>
        ) : (
          <>
            <Link to='/auth'>
              <MyButton className={cl.button}>Войти</MyButton>
            </Link>
          </>
        )
        }

      </div>
    </>

  );
}

export default Profilepanel;
