import React, { useState } from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import cl from './Registration.module.sass'

const Registration = () => {
  let [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  let userInfo = (e) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
  }

  let passwordValidation = (password, repeatedPassword) => {
    if (password.length == 0) {
      console.log('Пароль-то напиши');
      return
    }
    if (password.length <= 3) {
      console.log('Пароль сликшом короткий (прямо как твой...)');
      return;
    }
    if (password != repeatedPassword) {
      console.log('Пароли не совпадают');
      return;
    }
  }

  let formSubmit = () => {
    passwordValidation(user.password, );
    console.log(user);
  }

  return (
    <form className={cl.registration}>
      <MyInput onChange={(e) => userInfo(e)} type="text" name='name' placeholder="Имя пользователя" value={user.name} />
      <MyInput onChange={(e) => userInfo(e)} type="email" name='email' placeholder="Email" />
      <MyInput onChange={(e) => userInfo(e)} type="password" name='password' placeholder="Пароль" />
      <MyInput onChange={(e) => passwordValidation(user.password, e.currentTarget.value)} type="password" name='confirm-password' placeholder="Повторите пароль" />
      <MyButton onClick={formSubmit}>Войти</MyButton>
    </form>
  );
}

export default Registration;
