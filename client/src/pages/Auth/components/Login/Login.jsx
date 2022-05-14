import React from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import cl from './Login.module.sass'

const Login = () => {
  return (
    <form className={cl.login}>
      <MyInput type="email" placeholder="Email" />
      <MyInput type="password" placeholder="Пароль" />
      <MyButton>Войти</MyButton>
    </form>
  );
}

export default Login;
