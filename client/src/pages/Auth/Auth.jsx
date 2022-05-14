import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import cl from './Auth.module.sass';

const Auth = () => {
  let [isLogin, setIsLogin] = useState(true)

  let enter = (e) => {
    setIsLogin(true);
    console.log(e.target.classList.add('Auth_active__XQ5Lt'));
  }

  let registration = () => {
    setIsLogin(false);
    console.log(isLogin);
  }

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className={cl.auth}>
            <div className={cl.topline}>
              <span onClick={enter} className={isLogin ? cl.active : ''}>Войти</span>
              |
              <span onClick={registration} className={isLogin ? '' : cl.active}>Зарегистрироваться</span>
            </div>
            {isLogin ?
              <Login />
              :
              <Registration />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
