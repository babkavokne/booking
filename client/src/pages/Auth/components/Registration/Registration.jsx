import React from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import cl from './Registration.module.sass'

const Registration = () => {
  

  return (
    <form className={cl.registration}>
      <MyInput type="text" placeholder="Имя пользователя" />
      <MyInput type="email" placeholder="Email" />
      <MyInput type="password" placeholder="Пароль" />
      <MyInput type="password" placeholder="Повторите пароль" />
      <MyButton>Войти</MyButton>
    </form>
  );
}

export default Registration;
