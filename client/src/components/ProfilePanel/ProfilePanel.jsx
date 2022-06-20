import React from 'react';
import camera from '../../static/icons/icon-camera200.png';
import arrow from '../../static/icons/chevron-down.svg';
import cart from '../../static/icons/shopping-cart.svg';
import MyButton from '../MyButton/MyButton';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, avatarChange } from '../../store/store';
import { useState } from 'react';
import cl from './ProfilePanel.module.sass';
import $api from '../../http/index';

const Profilepanel = () => {
  const [isShown, setShown] = useState(false)
  let auth = useSelector((state) => state.auth)
  let user = useSelector((state) => state.auth.fullName || '')
  const dispatch = useDispatch();
  const showModal = () => {
    setShown(!isShown)
  }

  const exit = async () => {
    dispatch(logout())
    dispatch(avatarChange(''))
    localStorage.clear()
    const result = await $api.post('/logout')
  }

  return (
    <>
      {auth.isAuth ? <img src={cart} alt="Icon of shopping-cart: Icon" /> : null}
      <div onClick={() => showModal()} className={cl.panel}>
        {auth.isAuth ? (
          <>
            {auth.avatarLink ?
              <img src={auth.avatarLink} alt="User avatar: Image" className={cl.avatar} />
              :
              <img src={camera} alt="User avatar: Image" className={cl.avatar} />
            }
            <span>{user.split(' ')[1]}</span>
            <img src={arrow} alt="Panel arrow: Icon" />
            <div className={`${cl.modal} ${isShown ? cl.active : ''}`}>
              <span onClick={() => exit()}>Выйти</span>
              <NavLink to='/editProfile'><span>Редактировать профиль</span></NavLink>
              <NavLink to='/createOffer'><span>Создать предложение</span></NavLink>
            </div>
          </>
        ) : (
          <>
            <Link to='/auth'>
              <MyButton className={`${cl.button} `}>Войти</MyButton>
            </Link>
          </>
        )
        }

      </div>
    </>

  );
}

export default Profilepanel;
