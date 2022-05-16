import React, { useState } from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import axios from 'axios'
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

  // const API_URL = 'http://localhost:5000'

  // const $api = axios.create({
  //   baseURL: API_URL
  // })


  let validation = (user, repeatedPassword) => {
    if (user.name.length == 0) {
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

  let formSubmit = () => {
    if (validation(user, document.getElementById('confirm-password').value)) {
      // axios.get('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => console.log(response.data))
      console.log(user);

      axios.post('http://localhost:5000/registration', {email: user.email, password: user.password})
    }
  }

  return (
    <form className={cl.registration}>
      <MyInput onChange={(e) => userInfo(e)} type="text" name='name' placeholder="Имя пользователя" value={user.name} />
      <MyInput onChange={(e) => userInfo(e)} type="email" name='email' placeholder="Email" value={user.email} />
      <MyInput onChange={(e) => userInfo(e)} type="password" name='password' placeholder="Пароль" value={user.password} />
      <MyInput type="password" name='confirm-password' id='confirm-password' placeholder="Повторите пароль" />
      <MyButton onClick={formSubmit}>Войти</MyButton>
    </form>
  );
}

export default Registration;
