import React from 'react';
import axios from 'axios';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import cl from './Login.module.sass'


const Login = () => {
  const test = () => {
    axios.post('/registration', {})
  }

  return (
    <form className={cl.login}>
      <MyInput type="email" placeholder="Email" />
      <MyInput type="password" placeholder="Пароль" />
      <MyButton onClick={() => test()}>Войти</MyButton>
    </form>
  );
}

export default Login;
