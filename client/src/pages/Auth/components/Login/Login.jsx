import React, { useState } from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import { useSelector, useDispatch } from 'react-redux'
import { login, avatarChange } from '../../../../store/store'
import $api from '../../../../http/index'
import cl from './Login.module.sass'


const Login = (props) => {
  const dispatch = useDispatch()
  const [info, setInfo] = useState({ email: '', password: '' })
  const changeInfo = (e) => {
    setInfo({ ...info, [e.currentTarget.name]: e.currentTarget.value })
  }

  const enter = async () => {
    const res = await $api.post('/login', { email: info.email, password: info.password })
    if (res) {
      dispatch(login(res.data.name));
      localStorage.setItem('username', res.data.name);
      localStorage.setItem('isAuth', true)
      localStorage.setItem('token', res.data.access)
      localStorage.setItem('id', res.data.id)
      if (res.data.avatar) {
        const link = `http://localhost:5000/avatars/${res.data.avatar}`
        localStorage.setItem('avatar', link);
        dispatch(avatarChange( localStorage.getItem('avatar')))
      }
    }
  }



  return (
    <form className={cl.login}>
      <MyInput onChange={(e) => changeInfo(e)} name='email' type="email" placeholder="Email" />
      <MyInput onChange={(e) => changeInfo(e)} name='password' type="password" placeholder="Пароль" />
      <MyButton onClick={() => enter()}>Войти</MyButton>
    </form>
  );
}

export default Login;
