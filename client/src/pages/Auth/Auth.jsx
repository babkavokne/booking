import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import cl from './Auth.module.sass';

const Auth = () => {
  let [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className={cl.auth}>
            <div className={cl.topline}>
              <span onClick={() => setIsLogin(true)} className={isLogin ? cl.active : ''}>Войти</span>
              |
              <span onClick={() => setIsLogin(false)} className={isLogin ? '' : cl.active}>Зарегистрироваться</span>
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
