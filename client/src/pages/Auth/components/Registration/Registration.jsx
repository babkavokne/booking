import React, { useState } from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import axios from 'axios'
import MyInput from '../MyInput/MyInput';
import $api from '../../../../http/index'
import cl from './Registration.module.sass'

const Registration = () => {
  let [user, setUser] = useState({
    firstName: '',
    secondName: '',
    sureName: '',
    email: '',
    password: ''
  })

  let userInfo = (e) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
  }


  let validation = (user, repeatedPassword) => {
    if (user.firstName.length == 0) {
      console.log('Имя у тебя есть?');
      return false;
    }

    if (user.email.length == 0) {
      console.log('Email напиши, как без мыла-то?');
      return false;
    }

    if (user.password.length == 0) {
      console.log('Пароль-то напиши');
      return false;
    }

    if (user.password.length <= 3) {
      console.log('Пароль сликшом короткий (прямо как твой...)');
      return false;
    }

    if (user.password != repeatedPassword) {
      console.log('Пароли не совпадают');
      return false;
    }

    return true
  }

  let formSubmit = async () => {
    if (validation(user, document.getElementById('confirm-password').value)) {
      const res = await $api.post('/registration', { email: user.email, password: user.password, name: `${user.sureName} ${user.firstName} ${user.secondName}`, })

      console.log(res.data);
    }
  }

  return (
    <form className={cl.registration}>
      <h1 className={cl.header}>Успех!</h1>
      <MyInput onChange={(e) => userInfo(e)} type="text" name='sureName' placeholder="Фамилия*" value={user.sureName} />
      <MyInput onChange={(e) => userInfo(e)} type="text" name='firstName' placeholder="Имя*" value={user.firstName} />
      <MyInput onChange={(e) => userInfo(e)} type="text" name='secondName' placeholder="Отчество" value={user.secondName} />
      <MyInput onChange={(e) => userInfo(e)} type="email" name='email' placeholder="Email*" value={user.email} />
      <MyInput onChange={(e) => userInfo(e)} type="password" name='password' placeholder="Пароль*" value={user.password} />
      <MyInput type="password" name='confirm-password' id='confirm-password' placeholder="Повторите пароль*" />
      <MyButton onClick={formSubmit}>Зарегистрироваться</MyButton>
    </form>
  );
}

export default Registration;
